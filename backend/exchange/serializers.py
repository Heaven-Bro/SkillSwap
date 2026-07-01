from rest_framework import serializers

from .models import ExchangeRequest


class ExchangeSerializer(serializers.ModelSerializer):

    sender_name = serializers.ReadOnlyField(
        source="sender.username"
    )

    receiver_name = serializers.ReadOnlyField(
        source="receiver.username"
    )

    class Meta:

        model = ExchangeRequest

        fields = "__all__"

        read_only_fields = (
            "sender",
        )