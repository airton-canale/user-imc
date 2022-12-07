from django.db import models
from uuid import uuid4

class Pacientes(models.Model):
    id_paciente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=12)
    peso = models.FloatField()
    altura = models.FloatField()
    gordura = models.CharField(max_length=50)
