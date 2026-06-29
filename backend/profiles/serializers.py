from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):

    username = serializers.ReadOnlyField(
        source="user.username"
    )

    email = serializers.ReadOnlyField(
        source="user.email"
    )

    class Meta:
        model = Profile

        fields = "__all__"