from xml.etree.ElementInclude import include

from django.urls import path

from . import views
from .views import *

urlpatterns = [
    path('home/', home , name="home"),
    path('', home , name="home"),
    path('blog-detail/<slug>' , blog_detail , name="blog_detail"),
    path('blogs/' ,blogs, name="blogs"),
    path('contact/' ,contact, name="contact"),
    path('about/' ,about, name="about"),
path('READYTOSHIP/' ,READY, name="READY"), path('portfoilo/' ,portfoilo, name="portfoilo"),
]

