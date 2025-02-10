from rest_framework import generics
from rest_framework.generics import RetrieveAPIView
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileList(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

# Create your views here.
