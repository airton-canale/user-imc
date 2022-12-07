var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = adicionarPacienteFormulario(form);

  var pacienteTr = montaTr(paciente);
  
  var erros = validaPaciente(paciente);
  if (erros.length > 0){

    return exibeMensagensDeErro(erros);
  } 
  
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
})

  // var erroPeso = !validaPesoIndex(paciente.peso)
  // var erroAltura = !validaAlturaIndex(paciente.altura)
  //   if (erroPeso  && erroAltura){
  //   alert(`Peso ${form.peso.value} e Altura ${form.altura.value} Inválidos!`)
  //   form.reset();
  //   return;
  // }
  // if (erroPeso){
  //   alert(`Peso ${form.peso.value} Inválido!`)
  //   form.reset();
  //   return;
  // }

  // if (erroAltura){
  //   alert(`Altura ${form.altura.value} Inválida!`)
  //   form.reset();
  //   return;
  // }


  // adicionaPacienteNaTabela(paciente)

  

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
  erros.forEach((erro) => alert(erro));
}

function adicionarPacienteFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr({ nome, peso, altura, gordura, imc }) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(nome, "info-nome"));
  pacienteTr.appendChild(montaTd(validaPesoPaciente(peso), "info-peso"));
  pacienteTr.appendChild(montaTd(validaAlturaPaciente(altura), "info-altura"));
  pacienteTr.appendChild(montaTd(gordura, "info-gordura"));
  pacienteTr.appendChild(
    montaTd(validaImcPaciente(peso, altura, imc), "info-imc")
  );

  return pacienteTr;
}

function validaPesoPaciente(peso) {
  var pesoOk = validaPesoIndex(peso);
  if (pesoOk) return peso;
}

function validaAlturaPaciente(altura) {
  var alturaOk = validaAlturaIndex(altura);
  if (alturaOk) return altura;
}

function validaImcPaciente(peso, altura, imc) {
  var pesoOk = validaPesoIndex(peso);
  var alturaOk = validaAlturaIndex(altura);
  var imc = peso / (altura * altura);

  if (alturaOk && pesoOk) return imc;
}

function validaPaciente(paciente) {
  var erros = [];

  if (!validaPesoIndex(paciente.peso)) erros.push("Peso é invalido!");
  if (paciente.nome == "" || paciente.peso == 0 || paciente.altura == 0 || gordura == 0 ){
    erros.push("Dados preenchidos incorretamente")
  } 
  if (!validaAlturaIndex(paciente.altura)) erros.push("Altura é invalida!");
  // if (paciente.nome == 0) erros.push("Nome não pode ser em branco!");
  // if (paciente.peso == 0) erros.push("Peso não pode ser em branco!");
  // if (paciente.altura == 0) erros.push("Altura não pode ser em branco!"); 
  // if (paciente.gordura == "" || paciente.gordura == 0)
  //   erros.push("Gordura não pode ser em branco!");

  return erros;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList = classe;
  return td;
}
