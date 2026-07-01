from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):

    reviewer_name = serializers.ReadOnlyField(
        source="reviewer.username"
    )

    reviewee_name = serializers.ReadOnlyField(
        source="reviewee.username"
    )

    class Meta:
        model = Review
        fields = "__all__"
        read_only_fields = (
            "reviewer",
        )