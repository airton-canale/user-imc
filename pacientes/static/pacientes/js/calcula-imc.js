var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoOk = validaPesoIndex(peso);
  var alturaOk = validaAlturaIndex(altura);

  var imc = calculaImc(peso, altura);
  tdImc.textContent = imc;

  if (!pesoOk) {
    tdPeso.textContent = `Peso ${peso} Inválido!`;
  }

  if (!alturaOk) {
    tdAltura.textContent = `Altura ${altura} Inválida!`;
  }

  if (!pesoOk || !alturaOk) {
    tdImc.textContent = `IMC ${imc} Inválido!`;
    paciente.classList = "paciente-invalido";
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPesoIndex(peso) {
  return peso >= 0 && peso <= 200;
}

function validaAlturaIndex(altura) {
  return altura >= 0 && altura <= 3;
}
