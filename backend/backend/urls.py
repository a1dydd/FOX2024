# backend/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('mailer/', include('mailer.urls')),  # Include the mailer app URLs
]
