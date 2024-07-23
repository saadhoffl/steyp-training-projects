from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
import requests
import os

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not (username and email and password):
        return Response({
            'status_code': 400,
            'message': 'Missing required fields (username, email, password)'
        })

    try:
        if User.objects.filter(email=email).exists():
            return Response({
                'status_code': 409,
                'message': 'User already exists'
            })

        # Create the user
        user = User.objects.create_user(username=username, email=email, password=password)

        # Simulate sign-in by making a request to another endpoint
        protocol = "http://"
        if request.is_secure():
            protocol = "https://"

        host = request.get_host()

        url = protocol + host + "/api/v1/auth/signin/"
        headers = {'Content-Type': 'application/json'}
        data = {
            'username': username,
            'password': password  # Note: This is a simplification, in practice, use secure methods
        }
        response = requests.post(url, headers=headers, json=data)

        if response.status_code == 200:
            response_data = {
                'status_code': 6000,
                'message': 'User created successfully',
                'data': response.json()
            }
        else:
            response_data = {
                'status_code': 6001,
                'message': 'An error occurred during sign-in'
            }

        return Response(response_data)

    except Exception as e:
        return Response({
            'status_code': 500,
            'message': 'User Already Exists'
        })
