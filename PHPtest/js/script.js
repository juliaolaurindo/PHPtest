$(document).ready(function(){

    $("#btnBuscar").mouseup(function(){

      var cep = $("#cep").val();
      var siteBusca = 'https://viacep.com.br/ws/' + cep + '/json/';

    $.ajax({
      url: siteBusca,
      type: "get",
      dataType: "json",
      success: function(data){
        $("#campoCep").val(data.cep);
        $("#campoRua").val(data.logradouro);
        $("#campoBairro").val(data.bairro);
        $("#campoCidade").val(data.localidade);
        $("#campoEstado").val(data.uf);
      },
      error: function(erro){
        alert("Nenhum endereço localizado para este Cep. \nTente digitar apenas os oito digitos numéricos.");
        exibirInicio();
      }
    });

  });
});

  function exibirBusca() {
      $("#cep").val("");

      document.getElementById("resultadoBusca").style.display = "block";
      document.getElementById("inicioBusca").style.display = "none";
  }

  function exibirInicio() {
      $("#campoCep").val("");
      $("#campoRua").val("");
      $("#campoBairro").val("");
      $("#campoCidade").val("");
      $("#campoEstado").val("");

      document.getElementById("inicioBusca").style.display = "block";
      document.getElementById("resultadoBusca").style.display = "none";
  }
