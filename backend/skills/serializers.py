from rest_framework import serializers
from .models import Category, Skill


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"

class SkillSerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source = "category.name",
        read_only = True
    )

    class Meta:
        model = Skill 
        fields = "__all__"