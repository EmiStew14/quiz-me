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
var userchoice="";
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
var lastQuestion = questions.length - 1;

let runningQuestion = 0;


function showQuestions() {
    var questionincrementer = 0;
    userchoice;
    var currentquestion = questions;
    var quiz


for (var i = 0; i < questions[i].c.length; i++) {
    var choices = questions[i].c[0]
    console.log(`${questions[questionincrementer].c[i]}`);
    var userchoice = [0];
  $("ol").append("<li>" + questions[i].c[i] + "</li>");

    console.log(choices);

// for (var i = 0; i < userchoice; i++) {
//   if (questions === output[i]) questions = true;
// }

};
};

function penalty () {

}

function time() {
  var timeLeft = 75;

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

  if (questions === answers) {
    document.getElementById("answerme").addEventListener('click');
    console.log("Correct");
  } else {
    document.getElementById("answerme").addEventListener('click');
    console.log("WRONG");
    timeLeft - 20;
  }
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
});
