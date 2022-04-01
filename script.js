var startBtn = document.querySelector(".start-btn")
var nextBtn = document.querySelector(".next-btn")
var questionContainerEl = document.getElementById("question-container")
var highScoreAllTime = 60;
var randomQuestion, currentQuestionIndex 
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var highScoreView = document.querySelector(".high-score-view")

var timerEl = document.querySelector(".timer-element")
var playerScore = 500;
var timer = 76;

var startGame = function() {
    startBtn.classList.add("hide")
    startTimer();
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
        else if (answer.wrong) {
            button.dataset.wrong = answer.wrong
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
    var wrong = selectedBtn.dataset.wrong
    console.log(wrong)
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons .children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(randomQuestion.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
    }
    
    else {
        endScreen()
    }
}

var endScreen = function() {
    alert("You have finished with " + playerScore + " points");
    if(playerScore > highScoreAllTime) {
        var playerInitials = prompt("You have set the new high score! Please enter your initials")
        highScoreAllTime = playerScore 
        localStorage.setItem("highscore", playerInitials + " " + highScoreAllTime)

    } else if(playerScore <= highScoreAllTime) {
        alert("You have not beaten the high score of " + highScoreAllTime + ". Please try again!")
    }
 
}

var setStatusClass = function(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")

    }
    else {
        element.classList.add("wrong")
    }
}

var clearStatusClass = function(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


var startTimer = function() {
    var timerBegin = setInterval(function() {
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
}

var showHighScore = function() {
    window.alert("The current high score is " + localStorage.getItem("highscore") + " points")
}

// Event Listeners
startBtn.addEventListener("click", startGame)
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})

highScoreView.addEventListener("click", showHighScore)

// Question array
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
