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
const correctAnswers = []; 
var timeLeft = 75;

var questions = [
  {
    q: "What data type is not supported by JavaScript",
    c: ["undefined", "String", "Boolean", "Character"],
    a: "D",
  },
  {
    q: "Which identifier allow an object to be defined",
    c: ["{}", "[]", "=", '"()"'],
    a: "A",
  },
  {
    q:
      "_____ is created whenever a variable that is defined outside the current scope is accessed from within some inner scope. In JavaScript, this is created every time a function is created.",
    c: ["Parameter", "Callback", "Closure", "Variable"],
    a: "C",
  },
  {
    q:
      "What will be the output of the following code: <br> var Output = (function(x) {<br>delete x;<br> return x;<br>} ) (0); console.log(output);",
    c: ["1", "0", "x", "undefined"],
    a: "B",
  },
  {
    q:
      "what would be the output of the following code: <br> //nfe (named function expression)<br> var Foo = Function Bar() { return 7; }<br> typeof Bar();",
    c: ["null", "7", "reference error", "undefined"],
    a: "C",
  },
];
var score = Math.round(100 * correctAnswers.length/questions.length);
var lastQuestionIndex = questions.length - 1;

var questionincrementer = 0;

function showQuestions() {
    let currentquestion = questions[questionincrementer];
    for (var i = 0; i < lastQuestionIndex; i++) {
      question.innerHTML = "<p class='text-center'>" + currentquestion.q +"</p>";
      var currentAnswer = questions[questionincrementer].c[i];
        // console.log(`${questions[questionincrementer].c[i]}`);
        switch (i) {
          case 0:
            document.getElementById("A").innerHTML = "<p>" + currentAnswer + "</p>";
            break;
          case 1:
            document.getElementById("B").innerHTML = "<p>" + currentAnswer + "</p>";
            break;
          case 2:
            document.getElementById("C").innerHTML ="<p>" + currentAnswer + "</p>";
            break;
          case 3:
            document.getElementById("D").innerHTML = "<p>" + currentAnswer + "</p>";
            break;

          default:
            break;
        }
};
};
// $(next).on("click",()=>{
//   showQuestions();
// });

function beginQuiz() {
    // $("#quiz-card").hide();
    document.getElementById("quiz-card").setAttribute("style","display:none");
    document.getElementById("questions-box").setAttribute("style","display:block");
 }
 $(quizbtn).on("click",()=>{
     time();
     beginQuiz();
     showQuestions();
 });


// function generateScore() {
//   console.log("I'm generating score");
//     if (questionincrementer < lastQuestionIndex) {
//         questionincrementer++;
//         showQuestions();
//     }else{ 
//         clearInterval(timeInterval);
        
//     }
//   }

function time() {

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
      checkAnswer();
      saveScore();
      displayScore();
    }
  }, 1000);
}

function checkAnswer(answer) {
    if (answer === questions[questionincrementer].a){
        correctAnswers.push(answer);
        // console.log(answer);
        // answerCorrect();
    }else{
      timeLeft-=15;
        // answerIncorrect();
    }
    if(questionincrementer < lastQuestionIndex){
        questionincrementer++;
        showQuestions();
    }else{
        clearInterval(timeLeft);
        return score;
    }
    };
// function answerCorrect () {
//     var correct = document.getElementById("choices");
//    if (correct ) {
     
//    }
//     // correct.innerHTML="Correct!"
// };
// function answerIncorrect() {
//     var incorrect = document.getElementById("progress");
//     // incorrect.innerHTML= "WRONG!!"
// };

function displayScore(){
  window.alert("The quiz has now ended. Let's see how you did!");
  window.open ('./assets/index.html','_self',false);
  // scoreDiv.setAttribute("style", "display:block");
    let scoreBoardArr = localStorage.getItem('boardArr') || [];
    scoreDiv.innerHTML = scoreBoardArr;
}

function saveScore(){
  var playerInit = prompt("Please enter your initials!");
  console.log(playerInit);
  console.log(score);
  let scoreBoard = {
    id: playerInit,
    value: score
  };
  // console.log(scoreBoardArr);
  let newScore = [];
  // Array.isArray(newScore);
  newScore.push(scoreBoard);
  console.log(newScore);
  localStorage.setItem('boardArr', JSON.stringify(newScore));
    // var initials = document.getElementById("saveinit").form.id;
    // initials = localStorage.setItem("initials")
// document.getElementById("highScoreList").innerHTML = localStorage.getItem(score);
}
// $(back).on("click",()=> {

// })
// checkAnswer();
// saveScore();
// displayScore();