from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Skill
from .serializers import CategorySerializer, SkillSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CategoryViewSet(viewsets.ModelViewSet):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SkillViewSet(viewsets.ModelViewSet):

    queryset = Skill.objects.select_related(
        "category",
        "owner"
    )

    serializer_class = SkillSerializer

    permission_classes = [
        IsAuthenticatedOrReadOnly
    ]

    ...

    def perform_create(self, serializer):

        serializer.save(owner=self.request.user)