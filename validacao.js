document.getElementById("enviarDadosRoupa").addEventListener("submit", function (event) {
    event.preventDefault();

    const idade = document.getElementById("idade").value;
    const tamanho = document.getElementById("tamanho").value;
    const estado = document.getElementById("estado").value;
    const descricao = document.getElementById("descricao").value;

    if (idade === "") {
        window.alert("Selecione a idade.");
        return;
    }

    if (tamanho === "") {
        alert("Selecione o tamanho da roupa.");
        return;
    }

    if (estado === "") {
        alert("Selecione o estado da roupa.");
        return;
    }

    if (descricao === "") {
        alert("Descreva a roupa a ser doada.");
        return;
    }

    alert("Dados da roupa enviados com sucesso!");

})
