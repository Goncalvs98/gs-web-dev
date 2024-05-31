document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastroForm');
    const viagensList = document.getElementById('viagensList');
    const searchInput = document.getElementById('search');

    cadastroForm && cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const viagem = {
            data: document.getElementById('data').value,
            local: document.getElementById('local').value,
            microplasticos: document.getElementById('microplasticos').value,
            duracao: document.getElementById('duracao').value
        };

        if (validateViagem(viagem)) {
            saveViagem(viagem);
            cadastroForm.reset();
            alert('Viagem cadastrada com sucesso!');
        } else {
            alert('Preencha todos os campos corretamente.');
        }
    });

    const validateViagem = (viagem) => {
        return viagem.data && viagem.local && viagem.microplasticos && viagem.duracao;
    };

    const saveViagem = (viagem) => {
        const viagens = getViagens();
        viagens.push(viagem);
        localStorage.setItem('viagens', JSON.stringify(viagens));
    };

    const getViagens = () => {
        const viagens = localStorage.getItem('viagens');
        return viagens ? JSON.parse(viagens) : [];
    };

    const deleteViagem = (index) => {
        const viagens = getViagens();
        viagens.splice(index, 1);
        localStorage.setItem('viagens', JSON.stringify(viagens));
        renderViagens(viagens);
    };

    const renderViagens = (viagens) => {
        viagensList.innerHTML = '';
        viagens.forEach((viagem, index) => {
            const li = document.createElement('li');
            li.textContent = `${viagem.data} - ${viagem.local} - ${viagem.microplasticos} kg - ${viagem.duracao} h`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.onclick = () => deleteViagem(index);
            li.appendChild(deleteBtn);
            viagensList.appendChild(li);
        });
    };

    const filterViagens = (query) => {
        const viagens = getViagens();
        const filteredViagens = viagens.filter(viagem => 
            viagem.local.toLowerCase().includes(query.toLowerCase()) ||
            viagem.data.includes(query)
        );
        renderViagens(filteredViagens);
    };

    searchInput && searchInput.addEventListener('input', (e) => {
        filterViagens(e.target.value);
    });

    // Inicializa a lista de viagens e o relatório
    if (viagensList) {
        renderViagens(getViagens());
    }

    if (document.getElementById('relatorio')) {
        renderRelatorio();
    }

    const renderRelatorio = () => {
        const viagens = getViagens();
        document.getElementById('totalViagens').textContent = viagens.length;
        const totalMicroplasticos = viagens.reduce((sum, viagem) => sum + parseFloat(viagem.microplasticos), 0);
        document.getElementById('totalMicroplasticos').textContent = totalMicroplasticos.toFixed(2);
        const totalHoras = viagens.reduce((sum, viagem) => sum + parseFloat(viagem.duracao), 0);
        document.getElementById('totalHoras').textContent = totalHoras.toFixed(2);
    };
});
