from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from django.contrib.auth.models import User


@api_view(['POST'])
@permission_classes([AllowAny])
def create(request):

    email = request.data.get('email')
    password = request.data.get('password')
    username = request.data.get('username')

    if not User.objects.filter(username=username).exists():
        user = User.objects.create_user(username=username, email=email, password=password)
        response_data = {
            "status_code": 200,
            "data": "User created successfully",
        }
    else:    
        response_data = {
            "status_code": 400,
            "data": "User already exists",
        }
    return Response(response_data)