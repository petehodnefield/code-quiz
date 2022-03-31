var timerEl = document.querySelector(".timer-element")
var startBtn = document.querySelector(".start-btn")

var questionTwo = document.querySelector(".question-two")
var questionThree = document.querySelector(".question-three")
var playerScore = 0;


var totalQuestions = [questionTwo, questionThree]
var timer = 76;

var startQuiz = function() {
    var startTimer = setInterval(function() {
        timer--
        if(timer === 0) {
        clearInterval(interval)
        timerEl.textContent = "done";
        highscores();
        }
        else{
            timerEl.textContent = "Timer: " + timer;
            flashQuestions();

        }
    }, 1000)
}
var flashQuestions = function() {
    for(var i = 0; i < totalQuestions.length; i++) {
        setTimeout(() => {
            var x = totalQuestions[i]
            console.log(x)
        }, 5000);
    }
}

window.onload=function() {
    startBtn.addEventListener("click", startQuiz)
}

var highscores = function() {
    
}

// highscore = localStorage.setItem("highscore", playerScore)
// var AllTimeHighScore = localStorage.getItem("highscore", highscore)



// set display of questions to none

// every 5 seconds, set the display of questions to flex

