import json

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Conversation
from .models import Message


class ChatConsumer(AsyncWebsocketConsumer):

    async def connect(self):

        self.user = self.scope["user"]

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

        await self.accept()

    async def disconnect(self, close_code):

        await self.channel_layer.group_discard(

            self.room_group_name,

            self.channel_name,

        )

    async def receive(self, text_data):

        data = json.loads(text_data)

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