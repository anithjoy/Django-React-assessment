from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def user_profile(request):
    data = {
        'name': 'Anith Joy',
        'bio': 'Graduate student from stevens'
    }
    return JsonResponse(data)

def project_details(request):
    data = {
        'project': 'My Roulletect Project',
        'description': ' Hello Hiring manager,Thank you so much for this opportunity.  Sincerely, Anith Joy'
    }

    return JsonResponse(data)
