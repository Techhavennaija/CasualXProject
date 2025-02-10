from django.db import models

# Create your models here.
class UserProfile(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=15)
    display_name = models.CharField(max_length=100, unique=True)
    country = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    about = models.TextField()
    picture1 = models.ImageField(upload_to='user_pictures/')
    picture2 = models.ImageField(upload_to='user_pictures/')
    picture3 = models.ImageField(upload_to='user_pictures/')
    picture4 = models.ImageField(upload_to='user_pictures/')

    def __str__(self):
        return self.username