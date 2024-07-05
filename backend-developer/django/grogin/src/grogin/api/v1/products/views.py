from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.models import Product
from api.v1.products.serializers import ProductSerializer

@api_view(['GET'])
def products(request):
    instances = Product.objects.all()  # Fetch all Product instances

    q = request.GET.get("q")
        # instances = instances.filter(product_title__icontains=q)
        # instances = instances.filter(category__category_title__icontains=q)
        # instances = instances.filter(category__in=ids)
    if q:
        instances = instances.filter(colors__color__icontains=q)

    serializer = ProductSerializer(instances, many=True)
    response_data = {
        "status": 200,
        "data": serializer.data
    }
    return Response(response_data)
