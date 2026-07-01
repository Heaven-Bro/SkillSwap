from django.contrib import admin

from .models import Conversation
from .models import Message


@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "created_at",
        "updated_at",
    )

    filter_horizontal = (
        "participants",
    )


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "conversation",
        "sender",
        "is_read",
        "created_at",
    )

    list_filter = (
        "is_read",
    )

    search_fields = (
        "content",
        "sender__username",
    )