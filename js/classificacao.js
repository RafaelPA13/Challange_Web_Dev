const classificacoes = PILOTOS.map((piloto, index) => ({
  posicao: index + 1,
  piloto: piloto,
  largada: index + 1,
  melhorTempo: `1:${Math.floor(Math.random() * 60)}:0${index}`,
  diferenca: `00:00:${index * 10}`,
  pontos: (PILOTOS.length - index) * 2,
}));

//Mostra a tabela completa de pilotos quando a página pe carregada
window.addEventListener('DOMContentLoaded', mapeamento(classificacoes));

//Permitindo pesquisar apertando enter
const barraDePesquisa = document.getElementById('barra-pesquisa');
barraDePesquisa.addEventListener('keyup', (e) => {
  e.preventDefault();
  if (e.code == 'Enter') {
    mostrarPilotos(e.target.value);
  }
});

//Filtragem de pilotos
function buscarPiloto(corredor) {
  const dados = classificacoes.filter((classificacao) => {
    return classificacao.piloto.nome
      .toLowerCase()
      .includes(corredor.toLowerCase());
  });

  return dados;
}

//Imprime os pilotos na tela
function mostrarPilotos(corredor) {
  //Apaga a tabela
  const tabelaPilotos = document.getElementById('pilotos');
  tabelaPilotos.innerHTML = '';

  const dados = buscarPiloto(corredor);
  //Retorna um alerta se o piloto não for encontrado na lista
  if (dados.length == 0) {
    alert('Piloto não encontrado');
    mapeamento(classificacoes);
  } else {
    mapeamento(dados);
  }
}

//Mapeia a lista que for retornada
function mapeamento(lista) {
  //Elemento selecionado
  const tabelaPilotos = document.getElementById('pilotos');

  //Mapeamento de todos os elementos da lista
  lista.forEach((classificacao) => {
    //Elementos criados
    const tr = document.createElement('tr');
    //Estrutura da tag
    tr.innerHTML = `
                <td class="posicao">${classificacao.posicao}</td>
                <td class="piloto bordas-equipes ${classificacao.piloto.equipe.nome}">
                    <img class="foto-piloto" src=${classificacao.piloto.foto} alt=${classificacao.piloto.nome}>
                    <h2>${classificacao.piloto.nome}</h2>
                    <img class="foto-equipe" src="${classificacao.piloto.equipe.logo}" alt="${classificacao.piloto.equipe.nome}">
                </td>
                <td class="largada">${classificacao.largada}</td>
                <td class="melhor-tempo">${classificacao.melhorTempo}</td>
                <td class="diferenca">${classificacao.diferenca}</td>
                <td class="pontos">${classificacao.pontos}</td>
                `;
    tabelaPilotos.appendChild(tr);
  });
}
