let startBtn = document.querySelector(".start-btn");
let popupNote = document.querySelector(".popup-note");
let exitBtn = document.querySelector(".exit-btn");
let main = document.querySelector(".main");
let continueBtn = document.querySelector(".continue-btn");
let quizSection = document.querySelector(".quiz-section");
let quizBox = document.querySelector(".quiz-box");
let resultBox = document.querySelector(".result-box");
let myReply = document.querySelector(".my-reply");
let tryAgainBtn = document.querySelector(".try-again-btn");
let goHomeBtn = document.querySelector(".go-home-btn");
let feedback = document.querySelector(".final-feedback");

startBtn.addEventListener("click", () => {
    popupNote.classList.add("active");
    main.classList.add("active");
});

exitBtn.addEventListener("click", () => {
    popupNote.classList.remove("active");
    main.classList.remove("active");
});

continueBtn.addEventListener("click", () => {
    popupNote.classList.remove("active");
    main.classList.remove("active");
    quizSection.classList.add("active");
    quizBox.classList.add("active");
    showQuestions(0);
    questionCounter(1);
    totalScore();
    myReply.classList.remove("active");
});

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let chosenReplies = [];
let nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
    if (questionCount == questions.length - 1){
        quizBox.classList.remove("active");
        resultBox.classList.add("active");
        showResultBox();
        return;
    }
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove("active");
    myReply.classList.remove("active");
});

let optionList = document.querySelector(".option-list");


function showQuestions(index){
    let questionText = document.querySelector(".question-text");
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    let options = document.querySelectorAll(".option");
    for (let i = 0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer){
        answer.classList.add("correct");
        userScore += 1;
        totalScore();
        myReply.textContent = `${ukMe[Math.floor(Math.random() * ukMe.length)]}`;
    } else {
        answer.classList.add("incorrect");
        myReply.textContent = `${udkMe[Math.floor(Math.random() * udkMe.length)]}`;        
    }
    myReply.classList.add("active");
    for (let i = 0; i < allOptions; i++){
        if (optionList.children[i].textContent == correctAnswer){
            optionList.children[i].classList.add("correct");

        }
        else {
            optionList.children[i].classList.add("incorrect");
        }
    }

    for (let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled");
    }

    nextBtn.classList.add("active");
}

function questionCounter (index){
    let totalQuestion = document.querySelector(".question-total");
    totalQuestion.textContent = `Question ${index} of ${questions.length}`;
}

function totalScore(){
    let totalScore = document.querySelector(".header-score");
    totalScore.textContent = `Score: ${userScore}/${questions.length}`;
}

function showResultBox(){
    quizBox.classList.remove("active");
    resultBox.classList.add("active");

    let scoreText = document.querySelector(".text");
    scoreText.textContent = `You got ${userScore} out of ${questions.length} questions right!`;

    let circleProgress = document.querySelector(".circle-progress");
    let progressValue = document.querySelector(".percentage");
    let progresStartValue = 0;
    let progressEndValue = Math.round((userScore / questions.length) * 100);
    let speed = 20;

    let progress = setInterval(() => {
        progresStartValue++;
        progressValue.textContent = `${progresStartValue}%`;
        if (progresStartValue === progressEndValue){
            clearInterval(progress);
        }
        circleProgress.style.background = `conic-gradient(#3227fd ${progresStartValue * 3.6}deg, #333 0 1.8deg)`;
    }, speed)

    tryAgainBtn.addEventListener("click", () => {
    resultBox.classList.remove("active");
    quizBox.classList.add("active");
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    myReply.classList.remove("active");
});

goHomeBtn.addEventListener("click", () => {
    resultBox.classList.remove("active");
    quizSection.classList.remove("active");
    quizBox.classList.remove("active");
    main.classList.remove("active");
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
    totalScore();
});

let scoreRatio = userScore / questions.length;

if (scoreRatio <= 0.3) {
    chosenReplies = lowScoreReplies;
} else if (scoreRatio <= 0.7) {
    chosenReplies = midScoreReplies;
} else {
    chosenReplies = highScoreReplies;
}

feedback.textContent = `${chosenReplies[Math.floor(Math.random() * chosenReplies.length)]}`;

}




