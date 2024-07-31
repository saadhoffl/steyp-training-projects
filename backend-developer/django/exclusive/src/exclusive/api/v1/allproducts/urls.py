from django.urls import path
from api.v1.allproducts import views

urlpatterns = [
    path('', views.products),
]
