from django.db import models
from django.template.defaultfilters import slugify, register
from froala_editor.fields import FroalaField
from .helpers import *


class BlogModel(models.Model):
    objects = None
    title = models.CharField(max_length=1000, unique=True)
    content = FroalaField()
    slug = models.SlugField(max_length=1000, null=True, blank=True)
    image = models.ImageField(upload_to='blog')
    created_at = models.DateTimeField(auto_now_add=True)
    upload_to = models.DateTimeField(auto_now=True)
    body = models.TextField()
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = generate_slug(self.title)
        super(BlogModel, self).save(*args, **kwargs)

    @register.filter
    def divisibleby(num, val):
     return num % val



# TasloCharacters Model
class RecentWork(models.Model):
    title = models.CharField(max_length=100, verbose_name="Work title")
    image = models.ImageField(upload_to="works")

    def __str__(self):
        return self.title

# Client model

