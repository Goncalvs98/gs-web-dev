function clearViagem(id) {

    console.log("Excluindo o id:" + id);
    document.querySelector('#' + id).classList.add('apagando')
    document.querySelector('#' + id).addEventListener("animationend", () =>
    document.querySelector('#' + id).remove()
    )

    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    const viagensAtt = viagens.filter((t) => t.id !== id)
    localStorage.setItem("viagens", JSON.stringify(viagensAtt))

}