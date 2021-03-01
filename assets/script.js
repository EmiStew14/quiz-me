var timer = document.getElementById("time");
var scoreDiv = document.getElementById("scoreContainer");
var main = document.getElementById("main");
var questbx = document.getElementById("questions-box");
var quizbtn = document.getElementById("start");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var progress = document.getElementById("progress");
var score = 0;
var questions = [
  {
    q: "What data type is not supported by JavaScript",
    c: ["undefined", "String", "Boolean", "Character"],
    a: "Character",
  },
  {
    q: "Which identifier allow an object to be defined",
    c: ["{}", "[]", "=", '"()"'],
    a: "{}",
  },
  {
    q:
      "_____ is created whenever a variable that is defined outside the current scope is accessed from within some inner scope. In JavaScript, this is created every time a function is created.",
    c: ["Parameter", "Callback", "Closure", "Variable"],
    a: "Closure",
  },
  {
    q:
      "What will be the output of the following code: var Output = (function(x) {Delete X;return X;} ) (0); console.log(output);",
    c: ["1", "0", "x", "undefined"],
    a: "0",
  },
  {
    q:
      "what would be the output of the following code: //nfe (named function expression) var Foo = Function Bar() { return 7; }; typeof Bar();",
    c: ["null", "7", "refrence error", "undefined"],
    a: "refrence error",
  },
];
var lastQuestionIndex = questions.length - 1;

var questionincrementer = 0;

function showQuestions() {
    let currentquestion = questions[questionincrementer];
    question.innerHTML = "<p>" + currentquestion.q +"</p>";
    for (var i = 0; i < lastQuestionIndex; i++) {
        questionincrementer = questions[i].c("");
        /*console.log(`${questions[questionincrementer].c[0]}`);*/
    document.getElementById("choiceA").innerHTML = questions[lastQuestionIndex].c(0);
    console.log(questions[questionincrementer].c[i]);
    document.getElementById("choiceB").innerHTML = questions[lastQuestionIndex].c(1);
    console.log(questions[questionincrementer].c[i]);
    document.getElementById("choiceC").innerHTML = questions[lastQuestionIndex].c(2);
    console.log(questions[questionincrementer].c[i]);
    document.getElementById("choiceD").innerHTML = questions[lastQuestionIndex].c(3)
    console.log(questions[questionincrementer].c[i]);
};
    $(next).on("click",)
}

function beginQuiz() {
    // $("#quiz-card").hide();
    document.getElementById("quiz-card").setAttribute("style","display:none");
    document.getElementById("questions-box").setAttribute("style","display:block");
 }
 $(quizbtn).on("click",()=>{
     time();
     beginQuiz();
     showQuestions();
     questionRender();
     checkAnswer();
     generateScore();
     saveScore();

 });
function questionRender() {

for (var i = 0; i < lastQuestionIndex; i++) {
    progress.innerHTML+= "<div class='prog' id="+ questions[i].q +"></div>";
};
};

function generateScore() {
    if (questionincrementer < lastQuestionIndex) {
        questionincrementer++;
        questionRender();
    }else{ 
        clearInterval(timeInterval);
        scoreRender();
        saveScore();
    }
  }

function time() {
  var timeLeft = 75;
  var score = 0;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timer.textContent = timeLeft + " seconds";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timer.textContent = timeLeft + " second ";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timer.textContent = "" ;
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function 
    }
  }, 1000);
  var i=0;
  if (questions[i].c === questions[i].a) {
    score++;
    console.log("Correct");
  } else {
    timeLeft - 20;
    console.log("WRONG");
};
}
// $(quizbtn).on("click",()=>{
//     time();
//     beginQuiz();
//     showQuestions();
// });
function checkAnswer(answer) {
    if (answer === questions[questionincrementer].a){
        score++;
        answerCorrect();
    }else{
        answerIncorrect();
    }
    count= 0;
    if(questionincrementer < lastQuestionIndex){
        questionincrementer++;
        questionRender();
    }else{
        clearInterval(timeLeft);
        scoreRender();
    }
    };
function answerCorrect () {
    document.getElementById("questionincrementer").setAttribute("style","backgroundColor:#0f0");
};
function answerIncorrect() {
    document.getElementById("questionincrementer").setAttribute("style","backgroundColor:#f00");
};

function scoreRender(){
    scoreDiv.setAttribute("style", "display:block");
    score = Math.round(100 * score/questions.length);
    localStorage.setItem(score);
    document.getElementById("highscore").innerHTML= "'<p>'+ score +'</p>'";
}
function saveScore(){
    var initials = document.getElementById("save-init").form.id;
localStorage.setItem(score, initials);
document.getElementById("highscorelist").innerHTML = localStorage.getItem(scores);
}
