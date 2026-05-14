// Referências aos elementos do DOM
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

// Evento de clique nos botões para mudar abas
for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    // Remove classe 'ativo' de todos os botões e abas
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      abas[j].classList.remove("ativo");
    }

    // Adiciona classe 'ativo' ao botão e aba clicados
    botoes[i].classList.add("ativo");
    abas[i].classList.add("ativo");
  };
}

// Datas objetivos para cada meta
const temposObjetivo = [
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59"),
  new Date("2024-12-31T23:59:59")
];

// Função para calcular tempo restante
function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  
  let segundos = Math.floor((tempoFinal / 1000) % 60);
  let minutos = Math.floor((tempoFinal / 1000 / 60) % 60);
  let horas = Math.floor((tempoFinal / 1000 / 60 / 60) % 24);
  let dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);
  
  return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Atualiza os contadores inicialmente
function atualizaContadores() {
  for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(temposObjetivo[i]);
  }
}

// Atualiza os contadores a cada segundo
atualizaContadores();
setInterval(atualizaContadores, 1000);