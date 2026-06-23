from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Skill
from .serializers import CategorySerializer, SkillSerializer

class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SkillViewSet(viewsets.ModelViewSet):

    queryset = Skill.objects.select_related("category").all()

    serializer_class = SkillSerializer