from django.urls import path

from MediQ.views import *

urlpatterns = [
    path('', index, name='index'),
    path('symptom-checker.html/', checker, name='checker'),
    path('medical-service.html/', service, name='service'),
    path('online-booking.html/', booking, name='booking'),
    path('medical-insurance.html/', insur, name='insurance'),
    path('sign-up.html', signup, name='signup'),
    path('reset-password.html/', reset, name='reset')
]
app_name = 'MediQ'
