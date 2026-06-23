from rest_framework import serializers

from .models import Category, Skill


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):

    category_name = serializers.ReadOnlyField(
        source="category.name"
    )

    class Meta:
        model = Skill

        fields = [
            "id",
            "title",
            "description",
            "owner_name",
            "category",
            "category_name",
            "experience_level",
            "created_at",
            "updated_at",
        ]