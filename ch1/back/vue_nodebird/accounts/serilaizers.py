import bcrypt
from rest_framework import serializers

from .models import NodeVueUser


class NodeBirdUserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = NodeVueUser
        fields = (
            'email',
            'nickname',
            'password'
        )
        write_only_fields = (
            'password',
        )

    def save(self, **kwargs):
        validated_password = self.validated_data['password']
        b = bcrypt.hashpw(validated_password.encode('utf-8'), bcrypt.gensalt())
        self.validated_data['password'] = b.decode('utf-8')
        return super().save(**kwargs)
