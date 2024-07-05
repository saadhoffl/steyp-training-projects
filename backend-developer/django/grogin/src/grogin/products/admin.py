from django.contrib import admin
from products.models import Product, Category, ByColor, ByBrand, ByProductStatus

class ProductAdmin(admin.ModelAdmin):
    list_display = ['product_title', 'product_img', 'product_price', 'category']

admin.site.register(Product, ProductAdmin)
admin.site.register(Category)
admin.site.register(ByColor)
admin.site.register(ByBrand)
admin.site.register(ByProductStatus)