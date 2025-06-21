const questions = [
  {
    question: "O que o campo fornece à cidade?",
    options: ["Tecnologia", "Produtos agrícolas", "Indústrias", "Arranha-céus"],
    answer: 1
  },
  {
    question: "Qual destes vem da cidade e ajuda o campo?",
    options: ["Adubo natural", "Máquinas agrícolas", "Vento", "Chuva"],
    answer: 1
  },
  {
    question: "O que une o campo e a cidade?",
    options: ["Rivalidade", "Competição", "Comércio e colaboração", "Distância"],
    answer: 2
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === questions[current].answer) score++;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-container').style.display = 'none';
  resultContainer.style.display = 'block';
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

nextBtn.onclick = () => showQuestion();

showQuestion();
document.getElementById("next-btn").onclick = function () {
  if (current === 0 && score === 0) {
    showQuestion();
  } else {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
};
