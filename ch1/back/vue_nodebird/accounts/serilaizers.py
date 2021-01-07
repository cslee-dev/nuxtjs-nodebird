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
        read_only_fields = (
            'password',
        )
