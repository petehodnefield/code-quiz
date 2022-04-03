var startBtn = document.querySelector(".start-btn")
var nextBtn = document.querySelector(".next-btn")
var questionContainerEl = document.getElementById("question-container")
var highScoreAllTime = 60;
var randomQuestion, currentQuestionIndex 
var questionEl = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var highScoreView = document.querySelector(".high-score-view")

var timerEl = document.querySelector(".timer-element")
var playerScore = 2000;
var timer = 25;


// startGame function when user clicks the start button
var startGame = function() {
    timer = 25;
    startBtn.classList.add("hide")
    startTimer();
    randomQuestion = questionList.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    nextQuestion()
}

// Reset the question and pull from a random question in the array
var nextQuestion = function() {
    resetState()
    showQuestion(randomQuestion[currentQuestionIndex])
}

// Display one of the questions from the array
var showQuestion = function(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.textgi
        button.classList.add("btn")
        // Give the correct answer a dataset of "correct"
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        // Give the false answer a dataset of "wrong"
        else if (answer.correct = false) {
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
    
    // var wrong = selectedBtn.dataset.wrong
  
    var correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons .children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    // If there are more questions to be asked, show the next button
    if(randomQuestion.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide")
    }
    
    // If there are no more questions to be asked, run endGame
    else {
        endScreen()
    }
}

var endScreen = function() {
    timerEl.textContent = "done";
    // Show player how many points they earned
    alert("You have finished with " + playerScore + " points");
    // If player earns the highscore, they can enter their initials
    if(playerScore > highScoreAllTime) {
        var playerInitials = prompt("You have set the new high score! Please enter your initials")
        highScoreAllTime = playerScore 
        localStorage.setItem("highscore", playerInitials + " " + highScoreAllTime)
        nextBtn.classList.add("hide")
        // Show the start button and reset the timer
        startBtn.classList.remove("hide")

    // If player DID NOT earn the high score, allow them to reset the game
    } else if(playerScore <= highScoreAllTime) {
        alert("You have not beaten the high score of " + highScoreAllTime + ". Please try again!")
        startBtn.classList.remove("hide")
        nextBtn.classList.add("hide")
    }
    alert("Please refresh the page to start over!")
}

var setStatusClass = function(element, correct) {
    clearStatusClass(element)
    if (correct) {
        // Give the correct answer the class of correct
        element.classList.add("correct")

    }
    else {
        // Give incorrect answers the class of wrong
        element.classList.add("wrong")
    }
}

var clearStatusClass = function(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


var startTimer = function() {
    // Reduce the timer by 1 every second
    var timerBegin = setInterval(function() {
        timer--
        // If the timer reaches 0...
        if(timer === 0) {
        clearInterval(timerBegin)
        timerEl.textContent = "done";
        endScreen();
    }
        // If the timer is above 0...
        else{
            timerEl.textContent = "Timer: " + timer;
            // flashQuestions();
        }
    }, 1000)
}

// Display the high score saved in localStorage when the user clicks the link
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
    },
    {
        question: "Which JavaScript topic makes you cry the hardest?",
        answers: [ 
            {
                text: "localStorage",
                correct: false 
            },
            {
                text: "Callback functions",
                correct: false
            },
            {
                text: "Data attributes",
                correct: true
            },
            {
                text: "For loops",
                correct: false
            }
        ]
    },
    {
        question: "How long does it take to get good at JavaScript?",
        answers: [ 
            {
                text: "6 months",
                correct: false 
            },
            {
                text: "A lifetime",
                correct: false
            },
            {
                text: "1 day",
                correct: false
            },
            {
                text: "1 million years",
                correct: true
            }
        ]
    }
]
