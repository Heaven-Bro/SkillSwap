import json
from django.utils import timezone
from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Conversation, Message, UserStatus


class ChatConsumer(AsyncWebsocketConsumer):

    async def connect(self):

        self.user = self.scope.get["user"]

        if self.user.is_anonymous:
            await self.close()
            return

        self.room_id = self.scope["url_route"]["kwargs"]["room_id"]

        self.room_group_name = f"chat_{self.room_id}"

        is_member = await self.user_in_conversation()

        if not is_member:
            await self.close()
            return

        await self.channel_layer.group_add(

            self.room_group_name,

            self.channel_name,

        )

        await self.user_online()

        await self.accept()

    async def disconnect(self, close_code):

        await self.user_offline()
        await self.channel_layer.group_discard(

            self.room_group_name,
            self.channel_name,
        )

    async def receive(self, text_data):

        data = json.loads(text_data)
        event = data.get("event", "message")

        if event == "typing":

            await self.channel_layer.group_send(
                self.room_group_name,
                {

                    "type": "typing_event",
                    "user": self.user.username,

                }
            )
            return
        
        if event == "read":

            message_id = data["message_id"]
            await self.mark_message_read(
                message_id
            )

            await self.channel_layer.group_send(
                self.room_group_name,

                {
                    "type":"read_event",
                    "message_id":message_id,
                }
            )
            return

        message = data["message"]
        saved_message = await self.save_message(message)
        await self.channel_layer.group_send(
            self.room_group_name,

            {

                "type": "chat_message",
                "id": saved_message.id,
                "message": saved_message.content,
                "sender": saved_message.sender.username,
                "created_at": saved_message.created_at.isoformat(),
            }
        )

    async def chat_message(self, event):

        await self.send(

            text_data=json.dumps(event)

        )
    
    async def typing_event(self, event):

        await self.send(

            text_data=json.dumps({

                "event": "typing",

                "user": event["user"]

            })

        )    

    async def read_event(self,event):

        await self.send(

            text_data=json.dumps({

                "event":"read",

                "message_id":event["message_id"]

            })

        )

    @database_sync_to_async
    def user_in_conversation(self):

        return Conversation.objects.filter(

            id=self.room_id,

            participants=self.user

        ).exists()

    @database_sync_to_async
    def save_message(self, message):

        conversation = Conversation.objects.get(

            id=self.room_id

        )

        return Message.objects.create(

            conversation=conversation,

            sender=self.user,

            content=message

        )
    
    @database_sync_to_async
    def mark_message_read(self,message_id):

        Message.objects.filter(

            id=message_id

        ).update(

            is_read=True,

            read_at=timezone.now()

        )

    @database_sync_to_async
    def user_online(self):

        UserStatus.objects.update_or_create(

            user=self.user,

            defaults={

                "is_online": True

            }

        )


    @database_sync_to_async
    def user_offline(self):

        UserStatus.objects.update_or_create(

            user=self.user,

            defaults={

                "is_online": False

            }

        )