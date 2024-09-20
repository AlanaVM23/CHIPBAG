function carregarNomesChips() {
    var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
    var atribuicoes = JSON.parse(localStorage.getItem('atribuido')) || {};
    var container = document.getElementById('botao_chip');
    container.innerHTML = '';

    nomesChips.forEach(nomeChip => {
        var botao = document.createElement('button');
        botao.className = 'chipButton';

        if (atribuicoes[nomeChip]) {
            botao.innerHTML = `${nomeChip} - ${atribuicoes[nomeChip].nome}`;
        } else {
            botao.innerHTML = nomeChip;
        }

        container.appendChild(botao);

        var icone = document.createElement('i');
        icone.className = 'fa-solid fa-microchip';
        botao.appendChild(icone);
        botao.addEventListener('click', function () {
            abrirPopup(nomeChip);
        });
    });
}

function abrirPopup(nomeChip) {
    var popup = document.getElementById('menuPopup');
    var overlay = document.getElementById('overlay');
    var chipNameElement = document.getElementById('chipName');
    chipNameElement.innerText = nomeChip;
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

document.getElementById('favoritar').addEventListener('click', function () {
    var botaoChip = document.getElementById('botao_chip').querySelector('button');
    var icone = botaoChip.querySelector('i');

    if (icone.classList.contains('fa-microchip')) {
        icone.classList.remove('fa-microchip');
        icone.classList.add('fa-star');
    } else {
        icone.classList.remove('fa-star');
        icone.classList.add('fa-microchip');
    }

    this.classList.toggle('favoritado');
});

document.getElementById('favoritar').addEventListener('click', function () {
    this.classList.toggle('clicado');
});

document.getElementById('fechar').addEventListener('click', function () {
    document.getElementById('menuPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

window.onload = carregarNomesChips;

document.addEventListener('DOMContentLoaded', function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var pageMap = {
        'pg_inicial.html': 'menu_casa',
        'mapa.html': 'menu_mapa',
        'gerenciar.html': 'menu_mala',
        'perfil.html': 'menu_perfil'
    };
    var buttonId = pageMap[page];
e
    if (buttonId) {
        var activeButton = document.getElementById(buttonId);
        activeButton.classList.add('active');
    }
});

function excluirChip() {
    var excluir = document.getElementById("excluir");
    var camposExcluir = document.getElementById("confirm_excluir");

    if (excluir.click == true) {
        camposExcluir.classList.add("hidden");
    } else {
        camposExcluir.classList.remove("hidden");
    }

}

function confirmarExcluir(){
    var nomeChip = document.getElementById("chipName").innerText; 
    var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
    var index = nomesChips.indexOf(nomeChip);

    if (index !== -1) {
        nomesChips.splice(index, 1);
    }

    localStorage.setItem('nomesChips', JSON.stringify(nomesChips));

carregarNomesChips();
    document.getElementById('menuPopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

fecharCamposExcluir();
}

function fecharCamposExcluir() {
    var camposExcluir = document.getElementById("confirm_excluir");
    camposExcluir.classList.add("hidden");
}


