from django.urls import path
from .views import user_profile, project_details


urlpatterns = [
    path('user/', user_profile),
    path('project/', project_details),
]
