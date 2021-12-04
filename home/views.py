
from django.shortcuts import render , redirect
from django.views import generic
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect
from requests import request
from django.core.paginator import Paginator, Page
from rest_framework import viewsets, pagination

from .models import BlogModel ,RecentWork
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render, get_object_or_404
def home(request):
    context = {"blogs" : BlogModel.objects.all()}
    context['works'] = RecentWork.objects.all()
    blog_obj = BlogModel.objects.filter().order_by('-created_at')[:3]
    context["blogs"] =  blog_obj
    return render(request,"home.html", context)
def blog_detail(request , slug):
    context = {"blogs" : BlogModel.objects.all()}
    try:
        blog_obj = BlogModel.objects.filter(slug = slug).first()
        context['blog_obj'] =  blog_obj
    except Exception as e:
        print(e)
    return render(request , 'blog_detail.html' , context)


def blogs(request ):
    context =  {"blogs" : BlogModel.objects.all()}
    blog = BlogModel.objects.filter
    return render(request , 'blogs.html' , context)
    return HttpResponseRedirect('home.html')


def about(request ):
    return render(request , 'about.html' )
    return HttpResponseRedirect('home.html')
def contact(request ):
    return render(request , 'contact.html' )
    return HttpResponseRedirect('home.html')
@csrf_exempt
def somathing():
   return something
def READY(request ):
    return render(request , 'READYTOSHIP.html' )
    return HttpResponseRedirect('home.html')
def portfoilo(request ):
    context = {"blogs" : BlogModel.objects.all()}
    context['works'] = RecentWork.objects.all()
    return render(request , 'portfoilo.html' ,context)
    return HttpResponseRedirect('home.html')
