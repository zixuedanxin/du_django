#coding:utf8

from django.urls import path
from . import views

app_name = 'duauth'

urlpatterns = [
    path("login/",views.LoginView.as_view(),name='login'),
    path("register/",views.RegisterView.as_view(),name='register'),
    path("img_captcha/",views.img_captcha,name='img_captcha')
]