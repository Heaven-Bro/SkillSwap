from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Conversation
from .models import Message

from .serializers import ConversationSerializer
from .serializers import MessageSerializer


class ConversationViewSet(viewsets.ModelViewSet):

    serializer_class = ConversationSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Conversation.objects.filter(

            participants=self.request.user

        ).prefetch_related(

            "participants",
            "messages"

        )


class MessageViewSet(viewsets.ModelViewSet):

    serializer_class = MessageSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Message.objects.filter(

            conversation__participants=self.request.user

        ).select_related(

            "sender",
            "conversation"

        )

    def perform_create(self, serializer):

        serializer.save(

            sender=self.request.user

        )