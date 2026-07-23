const perguntas = [
  {
    pergunta: "Qual é a função de um Triceratops no jogo?",
    opcoes: ["pegar narcoberry", "coletar madeira", "coletar pedra", "transporte"],
    correta: 0
    
  },
  
  {
    pergunta: "Qual berry pode narcotizar criaturas?",
    opcoes: ["naco berry", "juju berry", "frent brry", "abacaxi"],
    correta: 0
    
  },
  
  {
    pergunta: "Qual estrutura protege melhor contra ataques: madeira ou pedra?",
    opcoes: ["ruinas", "bases", "montanhas", "ninho de pasaro"],
    correta: 0
    
  },
  
  {
    pergunta: "Como você sobe de nível no jogo?",
    opcoes: ["matando", "coletando itens", "fazendo nada", "domar animais"],
    correta: 0
    
  },
  
  {
    pergunta: "Qual criatura voadora é  boa para iniciantes?",
    opcoes: ["dodo", "gavião", "elefante", "passarinho"],
    correta: 0
    
  },
  
  {
    pergunta: "Quais são os dinos mais fortes para enfrentar chefões",
    opcoes: ["tex res", "terezin sauro", "felosirapitor", "elefante"],
    correta: 0
    
  },
  
  {
    pergunta: "Qual é o objetivo principal do jogador em ARK",
    opcoes: ["matar os bosses", "domesticar todos os animais", "domesticar um dodo", "achar humanos"],
    correta: 0
    
  },
  
  {
    pergunta: "Qual criatura é frequentemente usada para coletar madeira de forma eficiente",
    opcoes: ["dodo", "triseratopis", "terezin sauro", "tex"],
    correta: 0
    
  },
  
  {
    pergunta: "O que é necessário para domesticar um dinossauro",
    opcoes: ["carne", "planta", "berry", "ração"],
    correta: 0
    
  },
  
  {
    pergunta: "O que acontece quando um jogador morre",
    opcoes: ["perde nivel", "perde itens", "perde animais", "perde o mapa"],
    correta: 0
    
  }

]
let atual = 0;
let pontos = 0;


let tempo = 0;
let intervalo;


const timerElemento = document.createElement("p");
timerElemento.id = "timer";
timerElemento.style.fontSize = "20px";
timerElemento.style.fontWeight = "bold";
timerElemento.style.marginBottom = "15px";
timerElemento.textContent = "Tempo: 00:00";

document.querySelector(".quiz").prepend(timerElemento);


function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;
  
  return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}


function iniciarTimer() {
  intervalo = setInterval(() => {
    tempo++;
    document.getElementById("timer").textContent =
    "Tempo: " + formatarTempo(tempo);
  }, 1000);
}

function carregarPergunta() {
  const p = perguntas[atual];
  
  document.getElementById("pergunta").textContent = p.pergunta;
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("proxima").style.display = "none";
  
  p.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("opcao");
    
    botao.onclick = () => responder(botao, i);
    
    document.getElementById("opcoes").appendChild(botao);
  });
}

carregarPergunta();
iniciarTimer();



function responder(botaoClicado, indice) {
  const botoes = document.querySelectorAll(".opcao")
  const perguntaAtual = perguntas[atual]
  
  
  botoes.forEach(botao => {
    botao.disabled = true;
  });
  
  
  if (indice === perguntaAtual.correta) {
    botaoClicado.classList.add("certa");
    pontos++;
    document.getElementById("pontos").textContent="Pontos: " +pontos;
    
    
  }else{
    botaoClicado.classList.add("errada");
    
    
    botoes[perguntaAtual.correta].classList.add("certa");
  }
  
  document.getElementById("proxima").style.display = "block";
  
  
  
  document.getElementById("proxima").onclick = () => {}
  atual++;
  
  if (atual < perguntas.length) {
    carregarPergunta();
  } else {
    FinalizarQuiz();
  }
}



function FinalizarQuiz() {
  
  clearInterval(intervalo);
  
  
  document.getElementById("pergunta").textContent =
  "quiz finalizada!";
  
  
  
  
  
  document.getElementById("opcoes").innerHTML =`
          <h2>Você fez ${pontos}</h2>
        <p>tempo total: ${formartartempo(tempo)}</p>
      ';
  
       `
  
     document.getElementById("proxima").style.display = "none";
}
  
  
iniciarTimer();
carregarPergunta();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  









































