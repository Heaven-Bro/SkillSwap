from rest_framework import serializers

from .models import Conversation, UserStatus, Message


class MessageSerializer(serializers.ModelSerializer):

    sender_name = serializers.ReadOnlyField(
        source="sender.username"
    )

    class Meta:

        model = Message

        fields = (

            "id",

            "conversation",

            "sender",

            "sender_name",

            "content",

            "is_read",

            "read_at",

            "created_at",

        )

        read_only_fields = (
            "sender",
        )


class ConversationSerializer(serializers.ModelSerializer):

    participants = serializers.StringRelatedField(
        many=True
    )

    last_message = serializers.SerializerMethodField()
    last_sender = serializers.SerializerMethodField()

    class Meta:

        model = Conversation

        fields = (

            "id",

            "participants",

            "last_message",

            "last_sender",

            "updated_at",

        )

    def get_last_message(self, obj):

        message = obj.messages.last()

        if message:

            return message.content

        return ""
    

class UserStatusSerializer(serializers.ModelSerializer):

    username = serializers.ReadOnlyField(
        source="user.username"
    )

    class Meta:

        model = UserStatus

        fields = "__all__"