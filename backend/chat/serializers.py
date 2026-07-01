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

    online = serializers.SerializerMethodField()
    last_seen = serializers.SerializerMethodField()
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
            "online",
            "last_seen",

        )

    def get_last_message(self, obj):

        message = obj.messages.last()

        if message:

            return message.content

        return ""
    

    def get_online(self, obj):

        request = self.context["request"]

        other = obj.participants.exclude(
            id=request.user.id
        ).first()

        if not other:
            return False

        if hasattr(other, "status"):
            return other.status.is_online

        return False


    def get_last_seen(self, obj):

        request = self.context["request"]

        other = obj.participants.exclude(
            id=request.user.id
        ).first()

        if not other:
            return None

        if hasattr(other, "status"):
            return other.status.last_seen

        return None

class UserStatusSerializer(serializers.ModelSerializer):

    username = serializers.ReadOnlyField(
        source="user.username"
    )

    class Meta:

        model = UserStatus

        fields = "__all__"