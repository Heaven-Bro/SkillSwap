from rest_framework.routers import DefaultRouter

from .views import ConversationViewSet, MessageViewSet, UserStatusViewSet

router = DefaultRouter()

router.register(
    "conversations",
    ConversationViewSet,
    basename="conversations"
)

router.register(
    "messages",
    MessageViewSet,
    basename="messages"
)

router.register(
    "status",
    UserStatusViewSet,
    basename="status"
)
urlpatterns = router.urls