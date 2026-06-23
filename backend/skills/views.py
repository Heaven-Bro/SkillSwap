from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Skill
from .serializers import CategorySerializer, SkillSerializer

class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SkillViewSet(viewsets.ModelViewSet):

    queryset = Skill.objects.select_related("category").all()
    serializer_class = SkillSerializer

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    filter_backends = [
        "category",
        "experience_level",
    ]

    search_fields = [
        "title",
        "description",
        "owner_name",
    ]

    ordering_fields = [
        "created_at",
        "title",
    ]

    ordering = [
        "-created_at",
    ]