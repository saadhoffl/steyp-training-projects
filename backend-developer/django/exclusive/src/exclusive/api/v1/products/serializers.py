from rest_framework.serializers import ModelSerializer
from products.models import Product
from rest_framework import serializers


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'image', 'price')


class ProductDetailSerializer(ModelSerializer):

    category = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ('id', 'name', 'image', 'price', 'description','category')

    def get_category(self, instance):
        return instance.category.name
