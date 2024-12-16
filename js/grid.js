function exibir() {
    // Seleciona o botão de rádio marcado
    var tipo = document.querySelector('input[name="tipo"]:checked');

    if (tipo) {
        alert(`Tipo selecionado: ${tipo.value}`);
        window.location.href = "/html/home.html";
    } else {
        alert("Por favor, selecione o tipo (Entrada ou Saída).");
    }
}