from django.shortcuts import render, HttpResponse


# Create your views here.

def index(request):
    return render(request, "index.html")


def checker(request):
    return render(request, "symptom-checker.html")


def service(request):
    return render(request, "medical-service.html")


def booking(request):
    return render(request, "online-booking.html")


def insur(request):
    return render(request, "medical-insurance.html")
