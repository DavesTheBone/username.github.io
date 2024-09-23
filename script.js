const quizData = [
    {
        question: "JavaScriptは何のために使われますか？",
        a: "スタイルを追加するため",
        b: "ウェブサイトを構築するため",
        c: "インタラクティブ性を追加するため",
        d: "データベースを管理するため",
        correct: "c"
    },
    {
        question: "HTMLは何の略ですか？",
        a: "HyperText Markup Language",
        b: "HighText Machine Language",
        c: "HyperText Markup Level",
        d: "HyperText Multiple Language",
        correct: "a"
    },
    {
        question: "CSSはどのような役割を果たしますか？",
        a: "ウェブページの内容を作成する",
        b: "ウェブページのスタイルを指定する",
        c: "ウェブページのデータを管理する",
        d: "ウェブページをホストする",
        correct: "b"
    },
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next');
const scoreDisplay = document.getElementById('score');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a">${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b">${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c">${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d">${currentQuizData.d}</label><br>
    `;

    nextButton.classList.add('hidden');
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

nextButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showScore();
        }
    }
});

function showScore() {
    quizContainer.classList.add('hidden');
    scoreDisplay.classList.remove('hidden');
    scoreDisplay.innerHTML = `あなたのスコアは ${score} / ${quizData.length} です！`;
}

loadQuiz();
