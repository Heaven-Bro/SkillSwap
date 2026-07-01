"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os

from channels.routing import ProtocolTypeRouter
from channels.routing import URLRouter

from django.core.asgi import get_asgi_application

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "backend.settings"
)

django_asgi_app = get_asgi_application()

import chat.routing

application = ProtocolTypeRouter({

    "http": django_asgi_app,

    "websocket": URLRouter(
        chat.routing.websocket_urlpatterns
    ),

})
