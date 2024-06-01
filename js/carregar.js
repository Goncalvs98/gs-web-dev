const viagens = JSON.parse(localStorage.getItem("viagens")) || []
const inserir = document.querySelector("#inserir")

showCard(viagens)

function showCard(viagem) {
  
  console.log('teste',viagem);
  
  inserir.innerHTML = ''

  viagem.forEach(viagem =>{
  inserir.innerHTML +=  `
    <div class="col s12 l4" id="${viagem.id}">
    <div class="card horizontal">
      <div class="card-content">
        <span class="card-title">${viagem.nome} </span>
        <p>
          <p><strong class="blue-text text-darken-2">• Data: </strong>${viagem.data}</p>
          <p><strong class="blue-text text-darken-2">• Destino: </strong>${viagem.destino}</p>
          <p><strong class="blue-text text-darken-2">• Duração: </strong>${viagem.duracao} Horas</p>
          <p><strong class="blue-text text-darken-2">• Microplásticos Coletados: </strong>${viagem.quantidade} Kg</p>
          <br>

          <a onclick="clearViagem('${viagem.id}')" class="btn-floating btn-small waves-effect waves-light red"><i
              class="material-icons">delete</i></a>
        </p>
      </div>
    </div>
  </div>
    `
  })

}