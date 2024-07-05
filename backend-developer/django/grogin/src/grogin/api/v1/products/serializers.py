from rest_framework.serializers import ModelSerializer, SerializerMethodField
from products.models import Product, ByColor, ByBrand, ByProductStatus

from rest_framework import serializers

class ByColorSerializer(ModelSerializer):
    class Meta:
        model = ByColor
        fields = ('color',)

class ByBrandSerializer(ModelSerializer):
    class Meta:
        model = ByBrand
        fields = ('brand',)

class ByProductStatusSerializer(ModelSerializer):
    class Meta:
        model = ByProductStatus
        fields = ('product_status',)

class ProductSerializer(ModelSerializer):
    category = serializers.StringRelatedField()
    colors = ByColorSerializer(source='bycolor_set', many=True)
    brands = ByBrandSerializer(source='bybrand_set', many=True)
    statuses = ByProductStatusSerializer(source='byproductstatus_set', many=True)

    class Meta:
        model = Product
        fields = ("id", "product_title", "product_img", "product_price", "category", "colors", "brands", "statuses")
