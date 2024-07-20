from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.contrib.auth.models import User

import requests

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']

    if not User.objects.filter(email=email).exists():
        user = User.objects.create_user(email=email, username=username, password=password)

        headers = {'Content-Type': 'application/json'}

        data = f'{{"username": "{username}", "password": "{password}"}}'

        protocol = "http://"
        if request.is_secure():
            protocol = "https://"

        host = request.get_host()

        url = protocol + host + "/api/v1/auth/signin/"

        response = requests.post(url, headers=headers, data=data)
        if response.status_code == 200:
            response_data = {
                'status_code': 6000,
                'message': 'User created successfully',
                'data': response.json()
            }
        else:
            response_data = {
                'status_code': 6001,
                'message': 'An error occurred'
            }
    else:
        response_data = {
            'status_code': 6001,
            'data': 'User already exists'
        }
    return Response(response_data)