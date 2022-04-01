var startBtn = document.querySelector(".start-btn")
var nextBtn = document.querySelector(".next-btn")
var questionContainerEl = document.getElementById("question-container")

var randomQuestion, currentQuestionIndex 
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")

var timerEl = document.querySelector(".timer-element")
var playerScore = 0;
var timer = 76;

var startGame = function() {
    startBtn.classList.add("hide")
    randomQuestion = questionList.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    nextQuestion()
}

var nextQuestion = function() {
    resetState()
    showQuestion(randomQuestion[currentQuestionIndex])
}

var showQuestion = function(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", chosenAnswer)
        answerButtons.appendChild(button)
    })
}

var resetState = function() {
    nextBtn.classList.add("hide")
    while (answerButtons.firstChild) {
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}

var chosenAnswer = function(e) {
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons .children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(randomQuestion.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
    }
    else {
        startBtn.innerHTML = "Restart"
        startBtn.classList.remove("hide")
    }
}

var setStatusClass = function(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
        playerScore += 10;
        console.log(playerScore)
    }
    else {
        element.classList.add("wrong")
    }
}

var clearStatusClass = function(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

startBtn.addEventListener("click", startGame)
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})


var questionList = [
    {
        question: "When was JavaScript invented?",
        answers: [ 
            {
                text: "2020",
                correct: false
            },
            {
                text: "101",
                correct: false
            },
            {
                text: "1999",
                correct: false
            },
            {
                text: "1995",
                correct: true 
            }
        ]
    },
    {
        question: "How old am I?",
        answers: [ 
            {
                text: "22",
                correct: true 
            },
            {
                text: "18",
                correct: false
            },
            {
                text: "48",
                correct: false
            },
            {
                text: "38",
                correct: false
            }
        ]
    },
    {
        question: "What's my favorite fruit?",
        answers: [ 
            {
                text: "Apples",
                correct: false 
            },
            {
                text: "Oranges",
                correct: true
            },
            {
                text: "Bananas",
                correct: false
            },
            {
                text: "Grapes",
                correct: false
            }
        ]
    }
]
// var startQuiz = function() {
    
// }


// var flashQuestions = setInterval(function() {
//     questionOne.classList.toggle("active-question")
// }, 5000) 
    


// window.onload=function() {
//     // startBtn.addEventListener("click", startQuiz)
// }

var highscores = function() {
    
}

// highscore = localStorage.setItem("highscore", playerScore)
// var AllTimeHighScore = localStorage.getItem("highscore", highscore)



// set display of questions to none

// every 5 seconds, set the display of questions to flex


var startTimer = setInterval(function() {
    timer--
    if(timer === 0) {
    clearInterval(interval)
    timerEl.textContent = "done";
    highscores();
    }
    else{
        timerEl.textContent = "Timer: " + timer;
        // flashQuestions();
    }
}, 1000)