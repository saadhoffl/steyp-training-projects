import requests
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['POST'])
@permission_classes([AllowAny])
def create(request):

    email = request.data.get('email')
    password = request.data.get('password')
    username = request.data.get('username')

    if not User.objects.filter(username=username).exists():
        user = User.objects.create_user(username=username, email=email, password=password)

        headers = {
            "Content-Type": "application/json",
        }

        data = {
            "username": username,
            "email": email,
            "password": password
        }

        protocol = "http://"
        if request.is_secure():
            protocol = "https://"
            
        host = request.get_host()

        url = protocol + host + "/api/v1/auth/token/"

        response = requests.post(url, headers=headers, data=json.dumps(data))

        if response.status_code == 200:
            response_data = {
            "status_code": 200,
            "data": response.json(),
            "message": "User created successfully",
        }
        else:
            response_data = {
            "status_code": 400,
            "data": "User creation failed",
        }
            
    else:    
        response_data = {
            "status_code": 400,
            "data": "User already exists",
        }
    return Response(response_data)
    