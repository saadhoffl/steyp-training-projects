from django.contrib import admin
from products.models import Product, Category

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'image', 'price', 'descrption', 'category']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
