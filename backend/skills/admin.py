from django.contrib import admin

from .models import Category, Skill


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "name",
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):

    list_display = (
        
        "title",
        "owner",
        "category",
        "experience_level",
        "created_at",
    )

    list_filter = (
        "category",
        "experience_level",
    )

    search_fields = (
        "title",
        "description",
        "owner",
    )

    ordering = (
        "-created_at",
    )