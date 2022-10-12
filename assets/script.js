//Starting page and timer variables
var startingPage = document.querySelector(".starting-page");
var startBtn = document.querySelector(".start-btn");
var timer = document.querySelector(".timer");
let timerSeconds = 75;
var countDown;
//All answer choices variables
var answer1choices = document.querySelector(".answer1choices");
var answer2choices = document.querySelector(".answer2choices");
var answer3choices = document.querySelector(".answer3choices");
var answer4choices = document.querySelector(".answer4choices");
var answer5choices = document.querySelector(".answer5choices");
//Variables showing if answer was correct or incorrect
var line = document.querySelector("hr")
var correctText = document.querySelector(".correct-text")
var incorrectText = document.querySelector(".incorrect-text")
//Ending page variables
var endingPage = document.querySelector(".ending-page")
var initialsSubmit = document.querySelector("#initials-btn")
//Score variables
var finalScore = document.querySelector(".final-score")
var score = timerSeconds


//Start quiz and timer
function startQuiz() {
    startTimer();
    showQuestion1(); 
    document.querySelector(".high-scores").style.display = "none"
}
startBtn.addEventListener("click", startQuiz);

//Timer functions. Score inside startTimer() because remaining time=score
function startTimer() {   
    var countDown = setInterval (()=>{
        timerSeconds--;
        timer.innerText = `${timerSeconds}`;
        finalScore.innerText = `${timerSeconds}`
        if (timerSeconds >= 0) {
            if (finished === true && timerSeconds > 0) {   
                clearInterval(countDown)
            } 
        } 
        if (timerSeconds === 0) {
            clearInterval(countDown)
            showEndingPage()
        }
    },1000)
}

var finished = false

function finishedQuiz() {
    finished = true
}

function deductTime() {
    timerSeconds-=10
}

//Correct or Incorrect text functions. Incorrect answer deducts time
function showCorrectText() {
    line.classList.remove("hide")
    correctText.classList.remove("hide")
    incorrectText.classList.add("hide")
}

function showIncorrectText() {
    line.classList.remove("hide")
    incorrectText.classList.remove("hide")
    correctText.classList.add("hide")
    deductTime()
}

//Questions. Functions display new question and hide the others. Clicking an answer choice reveals the next question
function showQuestion1() {
    document.querySelector(".starting-page").style.display = "none";
    document.querySelector(".question1").style.display = "inline"
}

function showQuestion2() {
    document.querySelector(".question1").style.display = "none"
    document.querySelector(".question2").style.display = "inline"
}
answer1choices.addEventListener("click", showQuestion2);

function showQuestion3() {
    document.querySelector(".question2").style.display = "none"
    document.querySelector(".question3").style.display = "inline"
}
answer2choices.addEventListener("click", showQuestion3);

function showQuestion4() {
    document.querySelector(".question3").style.display = "none"
    document.querySelector(".question4").style.display = "inline"
}
answer3choices.addEventListener("click", showQuestion4);

function showQuestion5() {
    document.querySelector(".question4").style.display = "none"
    document.querySelector(".question5").style.display = "inline"
}
answer4choices.addEventListener("click", showQuestion5);

//Ending page and enter initials to track highscore
function showEndingPage() {
    document.querySelector(".question5").style.display = "none"
    document.querySelector(".ending-page").style.display = "inline"
}
answer5choices.addEventListener("click", showEndingPage);
answer5choices.addEventListener("click", finishedQuiz);

//Highscores page
function showHighScores() {
    document.querySelector(".ending-page").style.display = "none"
    document.querySelector(".high-scores").style.display = "inline"
    line.classList.add("hide")
    correctText.classList.add("hide")
    incorrectText.classList.add("hide")
}
initialsSubmit.addEventListener("click", showHighScores);

var input = document.getElementById("text-box")
var submitBtn = document.getElementById("initials-btn")
var output = document.getElementById("high-scores-list")

function logHighScoresList() {
    output.innerHTML = input.value
}

submitBtn.addEventListener("click", logHighScoresList)

//Go back button function
var goBackBtn = document.querySelector(".go-back-btn")
var clickedBackBtn = false

function yesClickedBackBtn() {
    clickedBackBtn = true
}

function showStartingPage() {
    document.querySelector(".high-scores").style.display = "none"
    document.querySelector(".starting-page").style.display = "inline"
}

goBackBtn.addEventListener("click", showStartingPage)