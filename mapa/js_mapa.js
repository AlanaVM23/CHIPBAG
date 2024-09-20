document.addEventListener("DOMContentLoaded", function() {
    const botaoMenu = document.getElementById("botão_menu");
    const overlay = document.getElementById("overlay");
    const menuChips = document.getElementById("menu_chips");
    const fecharPopup = document.getElementById("fechar");

    botaoMenu.addEventListener("click", function() {
        overlay.style.display = 'block';
        menuChips.classList.add("show");
        carregarNomesChips();
    });

    fecharPopup.addEventListener("click", function() {
        overlay.style.display = 'none';
        menuChips.classList.remove("show");
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = 'none';
        menuChips.classList.remove("show");
    });
});

function carregarNomesChips() {
    var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
    var atribuicoes = JSON.parse(localStorage.getItem('atribuido')) || {};
    var container = document.getElementById('botao_chip');
    container.innerHTML = '';

    nomesChips.forEach(nomeChip => {
        var divContainer = document.createElement('div');
        divContainer.className = 'chipContainer';

        var botao = document.createElement('button');
        botao.className = 'chipButton';

        if (atribuicoes[nomeChip]) {
            botao.innerHTML = `${nomeChip} - ${atribuicoes[nomeChip].nome}`;
        } else {
            botao.innerHTML = nomeChip;
        }

        var icone = document.createElement('i');
        icone.className = 'fa-solid fa-microchip';
        botao.appendChild(icone);

        divContainer.appendChild(botao);

        var detalhesDiv = document.createElement('div');
        detalhesDiv.className = 'detalhesChip hidden';

        var chipNome = document.createElement('p');
        chipNome.className = 'chip_nome';
        chipNome.textContent = nomeChip;
        detalhesDiv.appendChild(chipNome);

        if (atribuicoes[nomeChip] && atribuicoes[nomeChip].imagem) {
            var imgElement = document.createElement('img');
            imgElement.src = atribuicoes[nomeChip].imagem;
            imgElement.alt = `Imagem de ${nomeChip}`;
            imgElement.className = 'imagemChip';
            detalhesDiv.appendChild(imgElement);
        }

        var statusMensagem = document.createElement('p');
        statusMensagem.className = 'chip_status';
        statusMensagem.textContent = 'O chip não está ativado. Ative ele para saber sua localização.';
        detalhesDiv.appendChild(statusMensagem);     

        var ativarBotao = document.createElement('button');
        ativarBotao.className = 'ativar_chip';
        ativarBotao.textContent = 'Ativar Chip';
        detalhesDiv.appendChild(ativarBotao);

        divContainer.appendChild(detalhesDiv);
        container.appendChild(divContainer);

        botao.addEventListener('click', function() {
            mostrarDetalhes(detalhesDiv, botao);
        });
        var chipAtivado = false;

        function alternarAtivacao() {
            chipAtivado = !chipAtivado;
            localStorage.setItem(nomeChip + '_ativado', chipAtivado);
            if (chipAtivado) {
                ativarBotao.textContent = 'Desativar Chip';
                statusMensagem.textContent = 'O chip foi ativado! Sua localização está sendo exibida no mapa.';
                ativarBotao.classList.add('ativado');
            } else {
                ativarBotao.textContent = 'Ativar Chip';
                statusMensagem.textContent = 'O chip não está ativado. Ative ele para saber sua localização.';
                ativarBotao.classList.remove('ativado');
            }
        }

        ativarBotao.addEventListener('click', function() {
            alternarAtivacao();
            ativarBotao.classList.toggle('ativado'); 
        })
    });
}

function mostrarDetalhes(detalhesDiv, botao) {
    const todasDivs = document.querySelectorAll('.detalhesChip');
    const todosBotoes = document.querySelectorAll('.chipButton');

    todasDivs.forEach(div => {
        if (div !== detalhesDiv) {
            div.classList.add('hidden');
        }
    });
    todosBotoes.forEach(button => {
        if (button !== botao) {
            button.classList.remove('active');
        }
    });

    if (detalhesDiv.classList.contains('hidden')) {
        detalhesDiv.classList.remove('hidden');
        botao.classList.add('active');
    } else {
        detalhesDiv.classList.add('hidden');
        botao.classList.remove('active');
    }
}
