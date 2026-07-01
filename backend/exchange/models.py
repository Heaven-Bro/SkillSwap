from django.db import models
from django.contrib.auth.models import User
from skills.models import Skill


class ExchangeRequest(models.Model):

    STATUS = [

        ("Pending", "Pending"),
        ("Accepted", "Accepted"),
        ("Rejected", "Rejected"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),

    ]

    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="sent_requests"
    )

    receiver = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="received_requests"
    )

    offered_skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
        related_name="offered_requests"
    )

    requested_skill = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
        related_name="requested_requests"
    )

    message = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS,
        default="Pending"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f"{self.sender} -> {self.receiver}"