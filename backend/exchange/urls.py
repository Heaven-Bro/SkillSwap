from rest_framework.routers import DefaultRouter

from .views import ExchangeViewSet

router = DefaultRouter()

router.register(
    "",
    ExchangeViewSet
)

urlpatterns = router.urls