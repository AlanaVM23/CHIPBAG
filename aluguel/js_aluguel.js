function valorAPagar(){
    var select = Number.parseInt(window.document.querySelector("select#selecione").value);
    var totalPagar = window.document.getElementsByClassName("pagar0")[0];
    const valorChip = 50;

    switch (select) {
        case 1:
            select *= valorChip;
            break;
        case 2:
            select *= valorChip;
            break;
        case 3:
            select *= valorChip;
            break;
        case 4:
            select *= valorChip;
            break;
        case 5:
            select *= valorChip;
            break;
        case 6:
            select *= valorChip;
            break;
        case 7:
            select *= valorChip;
            break;
        case 8:
            select *= valorChip;
            break;
        case 9:
            select *= valorChip;
            break;
        case 10:
            select *= valorChip;
            break;
        default:
            break;
    }
    totalPagar.innerHTML = `Total a pagar: ${select.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
}

function camposCartao() {
    var checkBoxCartao = document.getElementById("cartao");
    var camposCartao = document.getElementById("campos_checkbox");

    if (checkBoxCartao.checked == true) {
        camposCartao.classList.remove("hidden");
    } else {
        camposCartao.classList.add("hidden");
    }
}

function camposPix() {
    var checkBoxPix = document.getElementById("pix");
    var camposCartao = document.getElementById("campos_checkbox");

    if (checkBoxPix.checked == true) {
        camposCartao.classList.add("hidden");
    } else {
        camposCartao.classList.remove("hidden");
    }
}


var botao_add = document.getElementById("add_endereço");
var overlay = document.getElementById('overlay');
var modal_endereço = document.getElementById("modal");
var botao_fechar = document.getElementById("fechar");

botao_add.onclick = function() {
  modal_endereço.style.display = "block";
  overlay.classList.add('visible');
}

botao_fechar.onclick = function() {
  modal_endereço.style.display = "none";
  overlay.classList.remove('visible');
}

var form = document.getElementById("form_endereço");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var nome = document.getElementById("nome").value;
  var cep = document.getElementById("cep").value;
  var telefone = document.getElementById("telefone").value;
  var rua = document.getElementById("rua").value;
  var numero = document.getElementById("numero").value;
  var bairro = document.getElementById("bairro").value;
  var cidade = document.getElementById("cidade").value;

  var salvando_endereço = {
    nome: nome,
    cep: cep,
    telefone: telefone,
    rua: rua,
    numero: numero,
    bairro: bairro,
    cidade: cidade
  };

  var endereços_salvos = JSON.parse(localStorage.getItem("endereços_salvos")) || [];
  endereços_salvos.push(salvando_endereço);
  localStorage.setItem("endereços_salvos", JSON.stringify(endereços_salvos));
  modal_endereço.style.display = "none";
  overlay.classList.remove('visible');
});

var endereços_salvos = JSON.parse(localStorage.getItem("endereços_salvos")) || [];

if (endereços_salvos.length > 0) {
    document.getElementById("print_endereço").style.display = "block";
    var div_enderecoSalvo = document.getElementById("enderecoSalvo");
    div_enderecoSalvo.innerHTML = "";
    var enderecosHTML = "<ul>";

    endereços_salvos.forEach(function(endereco) {
        enderecosHTML += "<li>";
        enderecosHTML += "<strong>Nome:</strong> " + endereco.nome + "<br>";
        enderecosHTML += "<strong>CEP:</strong> " + endereco.cep + "-------------------------------";
        enderecosHTML += "<strong>Telefone:</strong> " + endereco.telefone + "<br>";
        enderecosHTML += "<strong>Rua:</strong> " + endereco.rua + "-----";
        enderecosHTML += "<strong>Número:</strong> " + endereco.numero + "-----";
        enderecosHTML += "<strong>Bairro:</strong> " + endereco.bairro + "<br>";
        enderecosHTML += "<strong>Cidade:</strong> " + endereco.cidade + "<br>";
        enderecosHTML += "  ";
        enderecosHTML += "</li>";
    });

    enderecosHTML += "</ul>";
    div_enderecoSalvo.innerHTML = enderecosHTML;

} else {
    document.getElementById("print_endereço").style.display = "none";
}
