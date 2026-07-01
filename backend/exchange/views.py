from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import ExchangeRequest
from .serializers import ExchangeSerializer


class ExchangeViewSet(viewsets.ModelViewSet):

    serializer_class = ExchangeSerializer

    permission_classes = [IsAuthenticated]

    queryset = ExchangeRequest.objects.select_related(
        "sender",
        "receiver",
        "offered_skill",
        "requested_skill"
    )

    def perform_create(self, serializer):

        serializer.save(
            sender=self.request.user
        )