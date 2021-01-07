from django.db import models


# Create your models here.
class NodeVueUser(models.Model):
    email = models.EmailField(max_length=30, null=False, blank=False, unique=True)
    nickname = models.CharField(max_length=20, null=False, blank=False, unique=True)
    password = models.CharField(max_length=100, null=False, blank=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
