var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", () => {

  var request = new XMLHttpRequest();

  request.open("GET", "http://127.0.0.1:8000/pacientes/usuarios/");
  
  request.setRequestHeader('Access-Control-Allow-Origin', '*');

  request.addEventListener("load", () => {
    var resposta = request.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach((paciente) => {
      adicionaPacienteNaTabela(paciente);
    });
  });

  request.send();
});
