from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView

from .serilaizers import NodeBirdUserModelSerializer


class AccountsSignupAPIView(CreateAPIView):
    serializer_class = NodeBirdUserModelSerializer
