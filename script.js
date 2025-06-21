const questions = [
  {
    question: "O que é agricultura sustentável?",
    answers: [
      "Uso de agrotóxicos sem controle",
      "Produção que respeita o meio ambiente e as pessoas",
      "Plantio sem água",
      "Uso intensivo de máquinas"
    ],
    correct: 1
  },
  {
    question: "Qual destas ações ajuda a preservar o solo?",
    answers: [
      "Queimar lixo no campo",
      "Desmatar tudo para plantar mais",
      "Fazer rotação de culturas",
      "Lavar o solo com água"
    ],
    correct: 2
  },
  {
    question: "O que as abelhas fazem no ecossistema?",
    answers: [
      "Polinizam as plantas",
      "Destroem plantações",
      "Comem folhas",
      "São perigosas para o solo"
    ],
    correct: 0
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.style.display = "none";
  current = 0;
  score = 0;
  resultEl.style.display = "none";
  loadQuestion();
}

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = questions[current];
  questionEl.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].correct) {
    score++;
  }

  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "";
  answersEl.innerHTML = "";
  resultEl.style.display = "block";
  resultEl.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
  startBtn.textContent = "Jogar Novamente";
  startBtn.style.display = "inline-block";
}

