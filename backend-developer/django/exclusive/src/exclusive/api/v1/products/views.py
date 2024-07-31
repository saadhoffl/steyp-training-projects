from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models.query_utils import Q

from api.v1.products.serializers import ProductSerializer, ProductDetailSerializer
from products.models import Product


@api_view(['GET'])
@permission_classes([AllowAny])
def products(request):
    instances = Product.objects.filter()

    qsize = request.GET.get("qsize")

    if qsize:
        instances = Product.objects.filter()[:int(qsize)]

    context = {'request': request}
    serializer = ProductSerializer(instances, many=True, context=context)

    response_data = {
        'status_code': 6000,
        'data': serializer.data
    }
    return Response(response_data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view(request, pk):
    if Product.objects.filter(pk=pk).exists():
        instance = Product.objects.get(pk=pk)
        context = {'request': request}
        serializer = ProductDetailSerializer(instance, context=context)

        response_data = {
            'status_code': 6000,
            'data': serializer.data
        }
        return Response(response_data)
    
    else:
        response_data = {
            'status_code': 6001,
            'message': 'Place not found'
        }
        return Response(response_data)