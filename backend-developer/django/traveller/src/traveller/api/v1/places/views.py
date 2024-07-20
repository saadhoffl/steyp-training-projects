from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db.models.query_utils import Q

from api.v1.places.serializers import PlaceSerializer, PlaceDetailSerializer
from places.models import Place

@api_view(['GET'])
@permission_classes([AllowAny])
def places(request):
    instances = Place.objects.filter(is_deleted=False)

    q = request.GET.get('q')
    
    if q is not None:
        instances = instances.filter(Q(name__icontains=q) | Q(place__icontains=q) | Q(category__name__icontains=q))

    context = {'request': request}
    serializer = PlaceSerializer(instances, many=True, context=context)

    response_data = {
        'status_code': 6000,
        'data': serializer.data
    }
    return Response(response_data)


@api_view(['GET'])
@permission_classes([AllowAny])
def place(request, pk):
    if Place.objects.filter(pk=pk).exists():
        instance = Place.objects.get(pk=pk)
        context = {'request': request}
        serializer = PlaceDetailSerializer(instance, context=context)

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
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected(request, pk):
    if Place.objects.filter(pk=pk).exists():
        instance = Place.objects.get(pk=pk)
        context = {'request': request}
        serializer = PlaceDetailSerializer(instance, context=context)

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