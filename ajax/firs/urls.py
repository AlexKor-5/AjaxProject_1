from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.base, name='base'),
    url(r'^test/$', views.test, name='test')
]
