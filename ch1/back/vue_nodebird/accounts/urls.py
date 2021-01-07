from django.urls import path

from .views import AccountsSignupAPIView

app_name = 'accounts'
urlpatterns = [
    path('signup', AccountsSignupAPIView.as_view(), name="signup"),
]
