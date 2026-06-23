from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name
    
class Skill(models.Model):
    LEVEL_CHOICES = (
        ("Beginner", "Beginner"),
        ("Intermediate", "Intermediate"),
        ("Advanced", "Advanced"),
    )

    title = models.CharField(max_length=150)
    description = models.TextField()
    Category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="skills"
    )

    ower_name = models.CharField(max_length=100)

    exprience_level = models.CharField(
        max_length=20,
        choices=LEVEL_CHOICES
    )

    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title