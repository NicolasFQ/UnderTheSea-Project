var questions = [
    {
        question: "1. Qual a principal causa da poluição nos oceanos?",
        image: "peixe azul.png",
        answers: [
            { text: "Plástico", correct: false, feedback: "Opa! Na verdade os produtos químicos das fábricas são os mais poluentes no oceano!" },
            { text: "Petróleo", correct: false, feedback: "Opa! Na verdade os produtos químicos das fábricas são os mais poluentes no oceano!" },
            { text: "Químicos", correct: true, feedback: "Correto! Os produtos químicos deliberados por fábricas são os principais poluentes do oceano!" },
            { text: "Lixo", correct: false, feedback: "Opa! Na verdade os produtos químicos das fábricas são os mais poluentes no oceano!" }
        ]
    },
    {
        question: "2.O que causa a acidificação dos oceanos?",
        image: "peixepalhaço.png",
        answers: [
            { text: "Nitrogênio", correct: false, feedback: "Opa! Na verdade o CO2 (carbono) é o principal causador da acidificação nos oceanos!" },
            { text: "Oxigênio", correct: false, feedback: "Opa! Na verdade o CO2 (carbono) é o principal causador da acidificação nos oceanos!" },
            { text: "CO2", correct: true, feedback: "Correto! O CO2, conhecido também como caborno é o maior causador da acidificação nos oceanos!" },
            { text: "Metano", correct: false, feedback: "Opa! Na verdade o CO2 (carbono) é o principal causador da acidificação nos oceanos!" }
        ]
    },
    {
        question: "3.Qual ecossistema marinho é mais impactado pela sobrepesca?",
        image: "peixeamarelo.png",
        answers: [
            { text: "Recifes", correct: false, feedback: "Quase! Na verdade todos são afetados pela sobrepesca!" },
            { text: "Manguezais", correct: false, feedback: "Quase! Na verdade todos são afetados pela sobrepesca!" },
            { text: "Estuários", correct: false, feedback: "Quase! Na verdade todos são afetados pela sobrepesca!" },
            { text: "Todas as Alternativas", correct: true, feedback: "Correto! Todos são impactados pela sobrepesca!" }
        ]
    }
];

let currentQuestionIndex = 0;

function showQuestion() {
    var questionContainer = document.querySelector('.question');
    var answersList = document.querySelector('.answers-list');
    var feedbackContainer = document.querySelector('.feedback-container');
    var nextButton = document.querySelector('.next-btn');
    var retryButton = document.querySelector('.retry-btn');
    var questionImage = document.querySelector('.question-image');

    var currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    feedbackContainer.textContent = '';
    nextButton.style.display = 'none';
    retryButton.style.display = 'none';

    questionImage.src = `./img/${currentQuestion.image}`;
    questionImage.alt = currentQuestion.question;

    answersList.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(button, answer));
        li.appendChild(button);
        answersList.appendChild(li);
    });
}

function selectAnswer(button, answer) {
    var feedbackContainer = document.querySelector('.feedback-container');
    var nextButton = document.querySelector('.next-btn');

    feedbackContainer.textContent = answer.feedback;
    nextButton.style.display = 'block';

    var buttons = document.querySelectorAll('.answers-list button');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showCompletionMessage();
    }
}

function showCompletionMessage() {
    var questionContainer = document.querySelector('.question-container');
    var feedbackContainer = document.querySelector('.feedback-container');
    var retryButton = document.querySelector('.retry-btn');
    var nextButton = document.querySelector('.next-btn');

    questionContainer.innerHTML = '<h2 style="color: var(--color-light); font-size: 50px; font-family: var(--economica); width:100%;">Quiz Completo! Obrigado por participar!</h2>';
    feedbackContainer.innerHTML = '';
    nextButton.style.display = 'none';
    retryButton.style.display = 'block';
}

function retryQuiz() {
    currentQuestionIndex = 0;
    var questionContainer = document.querySelector('.question-container');
    questionContainer.innerHTML = `
        <div class="question-wrapper">
            <img src="" alt="" class="question-image">
        </div>
        <div class="alternatives">
            <h2 class="question"></h2>
            <ul class="answers-list"></ul>
            <div class="feedback-container"></div>
        </div>`;
    showQuestion();
}

document.querySelector('.start-btn').addEventListener('click', () => {
    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    showQuestion();
});

document.querySelector('.next-btn').addEventListener('click', nextQuestion);
document.querySelector('.retry-btn').addEventListener('click', retryQuiz);

showQuestion();