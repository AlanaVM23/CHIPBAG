var nomesChips = JSON.parse(localStorage.getItem('nomesChips')) || [];
function verificarCodigo() {
    var codigo = document.getElementById("codigo").value;
    var nomeChip = document.getElementById("nome_chip").value;
    var codigosCorretos = ['1111', '2222', '3333', '4444'];

    if (codigosCorretos.includes(codigo)) {
        nomesChips.push(nomeChip);
        localStorage.setItem('nomesChips', JSON.stringify(nomesChips));
        window.location.href = "concluido.html";
    } else {
        alert("Código incorreto! Por favor, tente novamente.");
    }
}

function voltar() {
    window.location.href = "../inicio/pg_inicial.html";
}