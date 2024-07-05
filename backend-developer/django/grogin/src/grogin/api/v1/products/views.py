from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.models import Product

from api.v1.products.serializers import ProductSerializer

@api_view(['GET'])
def products(request):

    instances = Product.objects.filter()
    serializer = ProductSerializer(instances, many=True)
    Response_data = {
        "status": 200,
        "data": serializer.data
    }
    return Response(Response_data)