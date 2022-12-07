from pipes import Template
from re import TEMPLATE
from django.shortcuts import render
import pacientes
from pacientes.models import Pacientes
from rest_framework.views import APIView
from pacientes.models import Pacientes
from rest_framework.response import Response
from django.views.generic import TemplateView

class ApagarPaciente(APIView):

    def get(self, request, pk):
        paciente = Pacientes.objects.filter(id_paciente = pk).first()
        return Response({
            'msg': 'Use o método DELETE para deletar o paciente {}'.format(paciente.nome)
        })

    def delete(self, request, pk):
        paciente = Pacientes.objects.filter(pk = pk).first()
        paciente.delete()

        return Response({
            'deletado': 'sim'
        })

class EdicaoPacientes(APIView):

    def post(self, request):

        pk = self.request.POST.get('id', '')
        nome = self.request.POST.get('nome', '')
        peso = self.request.POST.get('peso', '')
        altura = self.request.POST.get('altura', 0)
        gordura = self.request.POST.get('gordura', '')
        # imc = self.request.POST.get('pages', 0)
        paciente = Pacientes.objects.filter(id_paciente = pk).first()
        if paciente:
            paciente.nome = nome 
            paciente.peso = peso
            paciente.altura = altura
            paciente.gordura = gordura
            paciente.save()

        return Response({
            'editado': 'sim'
        })

class NovoPaciente(APIView):

    def post(self, request):

        nome = self.request.POST.get('nome', '')
        peso = self.request.POST.get('peso', '')
        altura = self.request.POST.get('altura', '')
        gordura = self.request.POST.get('gordura', 0)
        imc = self.request.POST.get('imc', 0)
        pacientes = Pacientes()
        pacientes.nome = nome 
        pacientes.peso = peso
        pacientes.altura = altura
        pacientes.gordura = gordura
        pacientes.imc = int(imc)
        pacientes.save()

        return Response({
            'Paciente Criado': 'sim'
        })

class ListagemPacientes(APIView):

    def get(self, request):

        filtro = request.GET.get('filtro', '')

        pacientes = []
        tabela = Pacientes.objects.filter(nome__icontains = filtro).all()

        for cada in tabela:
            pacientes.append({
                'nome': cada.nome,
                'peso': cada.peso,
                'altura': cada.altura,
                'gorduta': cada.gordura,
                'imc': cada.imc
            })

        return Response({
            'success': True,
            'pacientes': pacientes
        })    

class FormPacienteTemplateView(TemplateView):

    template_name = 'index.html'
