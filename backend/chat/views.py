from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from .models import Conversation, Message, UserStatus
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import ConversationSerializer, MessageSerializer, UserStatusSerializer


class ConversationViewSet(viewsets.ModelViewSet):

    serializer_class = ConversationSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Conversation.objects.filter(
            participants=self.request.user
        ).prefetch_related(

            "participants",

            "messages"

        ).order_by(

            "-updated_at"

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

    @action(
    detail=True,
    methods=["post"]
)
    def mark_read(self, request, pk=None):

        message = self.get_object()

        if message.sender != request.user:

            message.is_read = True

            message.read_at = timezone.now()

            message.save()

        return Response({

            "success": True

        })
    

class UserStatusViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = UserStatus.objects.select_related("user")

    serializer_class = UserStatusSerializer

    permission_classes = [IsAuthenticated]