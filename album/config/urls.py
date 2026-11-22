from django.contrib import admin
from django.urls import path

from album.views import api_albuns, resumo

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/albuns/", api_albuns, name="api_albuns"),
    path("api/albuns/resumo/", resumo, name="resumo")
]