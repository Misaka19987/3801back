from django.urls import path

from MediQ.views import *

urlpatterns = [
    path('', index),
    path('symptom-checker.html/', checker),
    path('medical-service.html/', service),
    path('online-booking.html/', booking),
    path('medical-insurance.html/', insur)
]
