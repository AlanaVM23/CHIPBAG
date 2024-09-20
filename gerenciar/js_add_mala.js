var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
var selectElement = document.getElementById('chip_mala');
nomesChips.forEach(function(chip) {
    var option = document.createElement('option');
    option.value = chip;
    option.textContent = chip;
    selectElement.appendChild(option);
});

document.getElementById('botao_salvar').addEventListener('click', function() {
    console.log('Botão salvar clicado');
    const nomeMala = document.getElementById('nome_mala').value;
    const chipSelecionado = document.getElementById('chip_mala').value;
    const fileInput = document.getElementById('imagem');
    const file = fileInput.files[0];
    
    if (nomeMala && chipSelecionado && file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const base64String = event.target.result;
            let atribuido = JSON.parse(localStorage.getItem('atribuido')) || {};
            atribuido[chipSelecionado] = {
                nome: nomeMala,
                imagem: base64String
            };
            
            localStorage.setItem('atribuido', JSON.stringify(atribuido));
            document.getElementById('nome_mala').value = '';
            document.getElementById('chip_mala').value = '';
            fileInput.value = '';
            document.getElementById('nome_img').textContent = 'Nenhuma imagem selecionada';

            window.location.href = 'concluido_add_mala.html';

        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, preencha todos os campos e selecione uma imagem.');
    }
});

document.getElementById('imagem').addEventListener('change', function() {
    var imagemInput = document.getElementById('imagem');
    var fileNameDisplay = document.getElementById('nome_img');
    if (imagemInput.files.length > 0) {
        var arquivo = imagemInput.files[0];
        fileNameDisplay.textContent = 'Arquivo selecionado: ' + arquivo.name;
    } else {
        fileNameDisplay.textContent = 'Nenhuma imagem selecionada';
    }
});