from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Review
from .serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):

    serializer_class = ReviewSerializer

    permission_classes = [IsAuthenticated]

    queryset = Review.objects.select_related(
        "reviewer",
        "reviewee",
        "exchange"
    )

    def perform_create(self, serializer):

        serializer.save(
            reviewer=self.request.user
        )