from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers

from pacientes.api import viewsets as pacientesviewsets
from pacientes.views import FormPacienteTemplateView

route = routers.DefaultRouter()

route.register(r'/usuarios',pacientesviewsets.PacientesViewSet, basename="Pacientes")



urlpatterns = [
    path('admin/', admin.site.urls),
    path('pacientes', include(route.urls)),
    path('', FormPacienteTemplateView.as_view()),
    *static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

]
