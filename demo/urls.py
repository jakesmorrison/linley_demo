from django.conf.urls import url
from . import views

app_name = 'demo'
urlpatterns = [
    url(r'^demo/$', views.demo, name='demo'),
    url(r'^get_data_demo/$', views.get_data_demo, name='get_data_demo')
]
