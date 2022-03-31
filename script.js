var timerEl = document.querySelector(".timer-element")

var questionTwo = document.querySelector(".question-two")
var questionThree = document.querySelector(".question-three")
var playerScore = 0;


var totalQuestions = [questionTwo, questionThree]
var timer = 10;

var interval = setInterval(function() {
    timer--
    if(timer === 0) {
       clearInterval(interval)
       timerEl.textContent = "done";
       highscores();
    }
    else{
        timerEl.textContent = "Timer: " + timer;

    }
}, 1000)

var highscores = function() {
    alert("You finished with " + playerScore + " points!")
}

// highscore = localStorage.setItem("highscore", playerScore)
// var AllTimeHighScore = localStorage.getItem("highscore", highscore)



// set display of questions to none

// every 5 seconds, set the display of questions to flex

