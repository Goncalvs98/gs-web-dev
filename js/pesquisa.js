const barraPesquisa = document.querySelector("#search")


barraPesquisa.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    pesquisar(searchValue)
  });


function pesquisar(palavra) {
    
    const viagensAtt = viagens.filter((viagem) => viagem.nome.toLowerCase().includes(palavra))
    
    showCard(viagensAtt)
    
    console.log('add', viagensAtt);
}
