from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include("api.v1.auth.urls")),
    path('api/v1/products/', include("api.v1.products.urls")),
    path('api/v1/allproducts/', include("api.v1.allproducts.urls")),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
