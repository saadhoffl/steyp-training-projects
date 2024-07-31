from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models.query_utils import Q

from api.v1.allproducts.serializers import ProductSerializer
from products.models import Product


@api_view(['GET'])
@permission_classes([AllowAny])
def products(request):
    instances = Product.objects.filter()

    context = {'request': request}
    serializer = ProductSerializer(instances, many=True, context=context)

    response_data = {
        'status_code': 6000,
        'data': serializer.data
    }
    return Response(response_data)
