document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("deleteModal");
    var btn = document.querySelector(".delete-button");
    var confirmBtn = document.getElementById("confirmDelete");
    var cancelBtn = document.getElementById("cancelDelete");

    btn.onclick = function() {
        modal.style.display = "flex";
    }

    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    confirmBtn.onclick = function() {
        modal.style.display = "none";
        alert('Conta excluída com sucesso.');
        // Aqui você pode adicionar a lógica para excluir a conta
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Chama a função para carregar os nomes dos chips ao carregar a página
    carregarNomesChips();
});

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

document.addEventListener('DOMContentLoaded', function () {
    // Obter o caminho da URL atual
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Mapear páginas para botões
    var pageMap = {
        'pg_inicial.html': 'menu_casa',
        'mapa.html': 'menu_mapa',
        'gerenciar.html': 'menu_mala',
        'perfil.html': 'menu_perfil'
    };
    // Encontrar o botão correspondente à página atual
    var buttonId = pageMap[page];

    // Adicionar a classe 'active' ao botão correspondente
    if (buttonId) {
        var activeButton = document.getElementById(buttonId);
        activeButton.classList.add('active');
    }
});
