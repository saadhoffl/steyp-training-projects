from django.contrib import admin
from products.models import Product, Category, SubCategory, Color, Brand, Stock

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'image', 'price', 'stock']
    list_filter = ['category', 'subcategory', 'color', 'brand', 'stock']  # Add filters to help in admin interface

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'category']
    list_filter = ['category']

class ColorAdmin(admin.ModelAdmin):
    list_display = ['name']

class BrandAdmin(admin.ModelAdmin):
    list_display = ['name']

class StockAdmin(admin.ModelAdmin):
    list_display = ['is_in_stock']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(Color, ColorAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Stock, StockAdmin)
