from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.models import Product
from api.v1.products.serializers import ProductSerializer
from django.db.models import Q

@api_view(['GET'])
def products(request):
    instances = Product.objects.all()  # Fetch all Product instances
    
    qcategory = request.GET.get("qcategory")
    qcolor = request.GET.get("qcolor")
    qbrand = request.GET.get("qbrand")
    qtitle = request.GET.get("qtitle")
    qinstock = request.GET.get("qinstock")
    qonsale = request.GET.get("qonsale")
    qlprice = request.GET.get("qlprice")
    qhprice = request.GET.get("qhprice")
    # instances = instances.filter(product_title__icontains=q)
    # instances = instances.filter(category__category_title__icontains=q)
    # instances = instances.filter(category__in=ids)
    # instances = instances.filter(bycolor__color__icontains=q)

    if qcategory:
        ids = qcategory.split(",")
        instances = instances.filter(category__in=ids)

    if qcolor:
        instances = instances.filter(bycolor__color__exact=qcolor)

    if qbrand:
        instances = instances.filter(bybrand__brand__exact=qbrand)

    if qinstock:
        instances = instances.filter(byproductstatus__product_status__exact=qinstock)

    if qonsale:
        instances = instances.filter(byproductstatus__product_status__exact=qonsale)    

    if qtitle:
        instances = instances.filter(Q(bybrand__brand__icontains=qtitle) |Q(product_title__icontains=qtitle)|Q(category__category_title__icontains=qtitle))

    if qlprice:
        instances = instances.filter(product_price__lte=qlprice)

    if qhprice:
        instances = instances.filter(product_price__gte=qhprice)    

    serializer = ProductSerializer(instances, many=True)
    response_data = {
        "status": 200,
        "data": serializer.data
    }
    return Response(response_data)
