from rest_framework import serializers

from .models import Category, Skill


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source="owner.username")

    category_name = serializers.ReadOnlyField(
        source="category.name"
    )

    class Meta:
        model = Skill

        fields = "__all__"