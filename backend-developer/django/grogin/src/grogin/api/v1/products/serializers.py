from rest_framework.serializers import ModelSerializer
from products.models import Product

from rest_framework import serializers

class ProductSerializer(ModelSerializer):

    category = serializers.StringRelatedField()

    class Meta:
        fields = ("id", "product_title", "product_img", "product_price", "category")
        model = Product

    def get_category(self, instance):
        return instance.category.category_title