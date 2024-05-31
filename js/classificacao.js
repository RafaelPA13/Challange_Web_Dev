//Lista de pilotos
const pilotos = [
  {
    posicao: 1,
    fotoPiloto: "../img/Pilotos/Antonio-Felix-Da-Costa.png",
    classe: "porsche",
    nome: "António Félix Da Costa",
    equipe: "../img/Equipes/Porsche_Formula_E.png",
    largada: 10,
    melhorTempo: "1:04:045",
    diferenca: "---",
    pontos: 25,
  },
  {
    posicao: 2,
    fotoPiloto: "../img/Pilotos/Nick-Cassidy.png",
    classe: "jaguar",
    nome: "Nick Cassidy",
    equipe: "../img/Equipes/Logo_da_Jaguar_Racing.png",
    largada: 2,
    melhorTempo: "1:03:728",
    diferenca: "00:00:691",
    pontos: 19,
  },
  {
    posicao: 3,
    fotoPiloto: "../img/Pilotos/Oliver-Rowland.png",
    classe: "nissan",
    nome: "Oliver Rowland",
    equipe: "../img/Equipes/NissanLogo.png",
    largada: 16,
    melhorTempo: "1:04:165",
    diferenca: "00:02:820",
    pontos: 15,
  },
  {
    posicao: 4,
    fotoPiloto: "../img/Pilotos/Pascal-Wehrlein.png",
    classe: "porsche",
    nome: "Pascal Wehrlein",
    equipe: "../img/Equipes/Porsche_Formula_E.png",
    largada: 6,
    melhorTempo: "1:04:193",
    diferenca: "00:04:193",
    pontos: 12,
  },
  {
    posicao: 5,
    fotoPiloto: "../img/Pilotos/Jake-Dennis.png",
    classe: "andretti",
    nome: "Jake Dennis",
    equipe: "../img/Equipes/Logo-Andretti-Global.webp",
    largada: 1,
    melhorTempo: "1:04:062",
    diferenca: "00:04:548",
    pontos: 13,
  },
  {
    posicao: 6,
    fotoPiloto: "../img/Pilotos/Mitch-Evans.png",
    classe: "jaguar",
    nome: "Mitch Evans",
    equipe: "../img/Equipes/Logo_da_Jaguar_Racing.png",
    largada: 4,
    melhorTempo: "1:04:317",
    diferenca: "00:04:953",
    pontos: 8,
  },
  {
    posicao: 7,
    fotoPiloto: "../img/Pilotos/Jehan-Daruvala.png",
    classe: "maseratti",
    nome: "Jehan Daruvala",
    equipe: "../img/Equipes/LogoMaserati.png",
    largada: 13,
    melhorTempo: "1:04:374",
    diferenca: "00:06:032",
    pontos: 6,
  },
  {
    posicao: 8,
    fotoPiloto: "../img/Pilotos/Sam-Bird.png",
    classe: "mclaren",
    nome: "Sam Bird",
    equipe: "../img/Equipes/NEOMMclarenLogo.png",
    largada: 11,
    melhorTempo: "1:04:204",
    diferenca: "00:06:698",
    pontos: 4,
  },
  {
    posicao: 9,
    fotoPiloto: "../img/Pilotos/Robin-Frijns.png",
    classe: "envision",
    nome: "Robin Frijns",
    equipe: "../img/Equipes/Envision_Racing_logo.png",
    largada: 18,
    melhorTempo: "1:04:206",
    diferenca: "00:07:119",
    pontos: 2,
  },
  {
    posicao: 10,
    fotoPiloto: "../img/Pilotos/Jean-Eric-Vergne.png",
    classe: "ds-penske",
    nome: "Jean Éric Vergne",
    equipe: "../img/Equipes/LogoDS_PENSKE.webp.png",
    largada: 9,
    melhorTempo: "1:04:217",
    diferenca: "00:07:357",
    pontos: 0,
  },
  {
    posicao: 11,
    fotoPiloto: "../img/Pilotos/Lucas-Di-Grassi.png",
    classe: "abt",
    nome: "Lucas Di Grassi",
    equipe: "../img/Equipes/Logotipo_da_ABT_CUPRA_Formula_E_Team.png",
    largada: 12,
    melhorTempo: "1:04:387",
    diferenca: "00:08:204",
    pontos: 0,
  },
  {
    posicao: 12,
    fotoPiloto: "../img/Pilotos/Jake-Hughes.png",
    classe: "mclaren",
    nome: "Jake Hughes",
    equipe: "../img/Equipes/NEOMMclarenLogo.png",
    largada: 14,
    melhorTempo: "1:04:212",
    diferenca: "00:10:349",
    pontos: 0,
  },
  {
    posicao: 13,
    fotoPiloto: "../img/Pilotos/Sergio-Sette-Camara.png",
    classe: "ert",
    nome: "Sérgio Sette Camara",
    equipe: "../img/Equipes/ERT_Formula_E_logo.png",
    largada: 15,
    melhorTempo: "1:04:358",
    diferenca: "00:10:403",
    pontos: 0,
  },
  {
    posicao: 14,
    fotoPiloto: "../img/Pilotos/Sebastien-Buemi.png",
    classe: "envision",
    nome: "Sébastien Buemi",
    equipe: "../img/Equipes/Envision_Racing_logo.png",
    largada: 19,
    melhorTempo: "1:04:079",
    diferenca: "00:11:124",
    pontos: 0,
  },
  {
    posicao: 15,
    fotoPiloto: "../img/Pilotos/Nico-Muller.png",
    classe: "abt",
    nome: "Nico Müller",
    equipe: "../img/Equipes/Logotipo_da_ABT_CUPRA_Formula_E_Team.png",
    largada: 21,
    melhorTempo: "1:04:040",
    diferenca: "00:11:780",
    pontos: 0,
  },
  {
    posicao: 16,
    fotoPiloto: "../img/Pilotos/Edoardo-Motara.png",
    classe: "mahindra",
    nome: "Edoardo Motara",
    equipe: "../img/Equipes/LogoMahindra.png",
    largada: 7,
    melhorTempo: "1:04:593",
    diferenca: "00:12:143",
    pontos: 0,
  },
  {
    posicao: 17,
    fotoPiloto: "../img/Pilotos/Dan-Ticktum.png",
    classe: "ert",
    nome: "Dan Ticktum",
    equipe: "../img/Equipes/ERT_Formula_E_logo.png",
    largada: 22,
    melhorTempo: "1:03:934",
    diferenca: "00:12:642",
    pontos: 0,
  },
  {
    posicao: 18,
    fotoPiloto: "../img/Pilotos/Nyck-De-Vries.png",
    classe: "mahindra",
    nome: "Nyck De Vries",
    equipe: "../img/Equipes/LogoMahindra.png",
    largada: 20,
    melhorTempo: "1:04:466",
    diferenca: "00:16:494",
    pontos: 0,
  },
  {
    posicao: 19,
    fotoPiloto: "../img/Pilotos/Norman-Nato.png",
    classe: "andretti",
    nome: "Norman Nato",
    equipe: "../img/Equipes/Logo-Andretti-Global.webp",
    largada: 3,
    melhorTempo: "1:03:553",
    diferenca: "00:20:851",
    pontos: 0,
  },
  {
    posicao: 20,
    fotoPiloto: "../img/Pilotos/Stoffel-Vandoorne.png",
    classe: "ds-penske",
    nome: "Stoffel Vandoorne",
    equipe: "../img/Equipes/LogoDS_PENSKE.webp.png",
    largada: 8,
    melhorTempo: "1:04:827",
    diferenca: "00:36:753",
    pontos: 0,
  },
  {
    posicao: 21,
    fotoPiloto: "../img/Pilotos/Sacha-Fenestraz.png",
    classe: "nissan",
    nome: "Sacha Fenestraz",
    equipe: "../img/Equipes/NissanLogo.png",
    largada: 17,
    melhorTempo: "1:04:769",
    diferenca: "---",
    pontos: 0,
  },
  {
    posicao: 22,
    fotoPiloto: "../img/Pilotos/Maximilian-Gunther.png",
    classe: "maseratti",
    nome: "Maximilian Günther",
    equipe: "../img/Equipes/LogoMaserati.png",
    largada: 5,
    melhorTempo: "1:05:345",
    diferenca: "---",
    pontos: 0,
  },
];

//Mostra a tabela completa de pilotos quando a página pe carregada
window.addEventListener('DOMContentLoaded', mapeamento(pilotos))

//Permitindo pesquisar apertando enter
const barraDePesquisa = document.getElementById("barra-pesquisa");
barraDePesquisa.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.code == "Enter") {
    mostrarPilotos(e.target.value);
  }
});

//Filtragem de pilotos
function buscarPiloto(corredor) {
  const dados = pilotos.filter((piloto) => {
    return piloto.nome.toLowerCase().includes(corredor.toLowerCase());
  });

  return dados;
}

//Imprime os pilotos na tela
function mostrarPilotos(corredor) {
  //Apaga a tabela 
  const tabelaPilotos = document.getElementById("pilotos");
  tabelaPilotos.innerHTML = ""
  
  const dados = buscarPiloto(corredor);
  //Retorna um alerta se o piloto não for encontrado na lista
  if (dados.length == 0) {
    alert("Piloto não encontrado")
    mapeamento(pilotos)
  } 
  else {  
    mapeamento(dados);
  }
}

//Mapeia a lista que for retornada
function mapeamento(lista) {
  //Elemento selecionado
  const tabelaPilotos = document.getElementById("pilotos");
  
  //Mapeamento de todos os elementos da lista
  lista.forEach((piloto) => {
    //Elementos criados
    const tr = document.createElement("tr");

    //Estrutura da tag
    tr.innerHTML = `
                <td class="posicao">${piloto.posicao}</td>
                <td class="piloto bordas-equipes ${piloto.classe}">
                    <img class="foto-piloto" src=${piloto.fotoPiloto} alt=${piloto.nome}>
                    <h2>${piloto.nome}</h2>
                    <img class="foto-equipe" src="${piloto.equipe}" alt="Equipe">
                </td>
                <td class="largada">${piloto.largada}</td>
                <td class="melhor-tempo">${piloto.melhorTempo}</td>
                <td class="diferenca">${piloto.diferenca}</td>
                <td class="pontos">${piloto.pontos}</td>
                `;
    tabelaPilotos.appendChild(tr);
  });
}
