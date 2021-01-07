import bcrypt
from django.db import models


# Create your models here.
class NodeVueUser(models.Model):
    email = models.EmailField(max_length=30, null=False, blank=False, unique=True)
    nickname = models.CharField(max_length=20, null=False, blank=False, unique=True)
    password = models.CharField(max_length=100, null=False, blank=False)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)

    def hashed_password(self, plain_password):
        b = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt())
        self.password = b

    def match_password(self, input_password):
        is_matched = bcrypt.checkpw(input_password.encode('utf-8'), self.password.encode('utf-8'))
        return is_matched
