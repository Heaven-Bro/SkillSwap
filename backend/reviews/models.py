from django.db import models
from django.contrib.auth.models import User
from exchange.models import ExchangeRequest


class Review(models.Model):

    exchange = models.OneToOneField(
        ExchangeRequest,
        on_delete=models.CASCADE,
        related_name="review"
    )

    reviewer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reviews_given"
    )

    reviewee = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="reviews_received"
    )

    rating = models.IntegerField()

    comment = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reviewer} → {self.reviewee}"