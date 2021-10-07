from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "index.html")

def insur(request):
    return render(request, "medical-insurance.html")