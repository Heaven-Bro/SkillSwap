from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Skill
from .serializers import CategorySerializer, SkillSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated

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




@action(detail=False, methods=["get"], permission_classes=[IsAuthenticated])
def my_skills(self, request):

    skills = Skill.objects.filter(owner=request.user)

    serializer = self.get_serializer(skills, many=True)

    return Response(serializer.data)