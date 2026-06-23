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
        "id",
        "title",
        "owner_name",
        "category",
        "experience_level",
    )

    list_filter = (
        "category",
        "experience_level",
    )

    search_fields = (
        "title",
        "owner_name",
    )