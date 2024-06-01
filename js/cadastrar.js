document.querySelector("#button_cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    // Criar um objeto para armazenar as informações do gasto
    const viagem = {
        id: "id" + new Date().getTime(),
        nome: form.elements['name'].value,
        data: form.elements['data'].value,
        destino: form.elements['local'].value,
        quantidade: form.elements['quantity'].value,
        duracao: form.elements['duration'].value,
        // observação: form.elements['observation'].value,
    };

    // Exibir os valores para teste (pode remover isso depois)
    console.log('Informações da Viagem:', viagem);

    salvar(viagem)
})

function salvar(viagem) {
    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    viagens.push(viagem)
    localStorage.setItem("viagens", JSON.stringify(viagens))
    window.location.href = "visualizar.html"
}

function clear_storage() {
    console.log("limpando o storage");
    localStorage.clear()

}