var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
var ativadoDiv = document.getElementById('ativado_div');
var title2 = document.getElementById('title_2');
var text2 = document.getElementById('text_2');
var textoAtivado = document.getElementById('text_ativado')

function verificarChipAtivado(nomeChip) {
    var chipAtivado = localStorage.getItem(nomeChip + '_ativado');
    return chipAtivado === "true";
}

var algumChipAtivado = false;
nomesChips.forEach(function(nome) {
    if (verificarChipAtivado(nome)) {
        algumChipAtivado = true;
        var chipDiv = document.createElement('div');
        chipDiv.classList.add('mensagemAtivado');
        chipDiv.innerHTML = nome + " - Ativado";
        ativadoDiv.appendChild(chipDiv);
        title2.style.display = 'none';
        text2.style.display = 'none';
        textoAtivado.style.display = 'block';
    }
});

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

    if (buttonId) {
        var activeButton = document.getElementById(buttonId);
        activeButton.classList.add('active');
    }
});