from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SkillViewSet

router = DefaultRouter()
router.register(
    "categories",
    CategoryViewSet,
    basename="categories"
)

router.register(
    "skills",
    SkillViewSet,
    basename="skills"
)
urlpatterns = router.urls
