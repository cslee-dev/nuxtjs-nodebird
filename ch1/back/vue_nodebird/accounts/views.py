from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView


class AccountsSignupAPIView(APIView):
    def get(self, request):
        print(request)
        return Response("hi")

    def post(self, request):
        print(request)
        return Response(request.data, status=200)
