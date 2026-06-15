// Constantes e seleção do DOM
const catalogoContainer = document.getElementById('catalogo-container');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalGenre = document.getElementById('modal-genre');
const modalSummary = document.getElementById('modal-summary');

// 1. Consumo de API (Buscando dados do nosso backend)
async function buscarJogos() {
    try {
        const response = await fetch('https://catalogo-jogos-production.up.railway.app/api/jogos');
        const jogos = await response.json();
        renderizarCatálogo(jogos);
    } catch (error) {
        console.error("Erro ao buscar jogos da API:", error);
        catalogoContainer.innerHTML = '<p>Erro ao carregar o catálogo.</p>';
    }
}

// 2. Manipulação do DOM
function renderizarCatálogo(jogos) {
    catalogoContainer.innerHTML = ''; // Limpa o container
    
    jogos.forEach(jogo => {
        // Criação dinâmica dos elementos
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${jogo.imagem_url}" alt="${jogo.nome}">
            <div class="card-info">
                <h3>${jogo.nome}</h3>
            </div>
        `;

        // 3. Eventos em JavaScript
        card.addEventListener('click', () => abrirModal(jogo));
        catalogoContainer.appendChild(card);
    });
}

// Funções para controle do Modal
function abrirModal(jogo) {
    modalTitle.textContent = jogo.nome;
    modalGenre.textContent = jogo.genero;
    modalSummary.textContent = jogo.resumo;
    modal.style.display = 'flex'; // Exibe usando flexbox
}

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicia a aplicação
buscarJogos();