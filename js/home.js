const pilotosCircuitos = [
  {
    posicao: 1,
    piloto: PILOTOS[0],
  },
  {
    posicao: 2,
    piloto: PILOTOS[1],
  },
  {
    posicao: 3,
    piloto: PILOTOS[2],
  },
  {
    posicao: 4,
    piloto: PILOTOS[3],
  },
];

window.addEventListener('DOMContentLoaded', carregarCircuitos);

function carregarCircuitos() {
  const circuitos = document.getElementById('circuito-lista');
  circuitos.innerHTML = '';

  const primeiraPosicaoContainer = document.getElementById('primeira-posicao');
  primeiraPosicaoContainer.innerHTML = '';

  pilotosCircuitos.forEach((pilotoCircuito, i) => {
    const card = document.createElement('div');
    card.classList.add('piloto-card');
    card.classList.add('mb-1');

    card.innerHTML = `
            <div class="cor-equipe bg-${
              pilotoCircuito.piloto.equipe.nome
            }"></div>
            <div class="posicao flex-center"><p>${
              pilotoCircuito.posicao
            }</p></div>
            ${
              i > 0
                ? `<div class="piloto-foto">
                <img
                src="${pilotoCircuito.piloto.foto}"
                alt="${pilotoCircuito.piloto.nome}"
                />
            </div>`
                : null
            }
            <div class="piloto-nome flex-center">
                <p>${pilotoCircuito.piloto.nome}</p>
            </div>
            <div class="piloto-equipe flex-center">
                <img
                src="${pilotoCircuito.piloto.equipe.logo}"
                alt="${pilotoCircuito.piloto.equipe.nome}"
                />
            </div>
        `;

    if (i === 0) {
      primeiraPosicaoContainer.appendChild(card);
    } else {
      circuitos.appendChild(card);
    }
  });
}
