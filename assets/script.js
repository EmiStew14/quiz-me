var timer = document.getElementById("time");
var main = document.getElementById("main");
var quizbtn = document.getElementById("start");
var questions = [
  {
    q: "What data type is not supported by JavaScript",
    c: ["Undefined", "String", "Boolean", "Character"],
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
    var list = $("p");

for (var i = 0; i < questions[0].c.length; i++) {
  var choice = $("p");
  $("ol").append("<li>" + questions[0].c[i] + "</li>");
     }
    answers = [[0].a, [1].a, [2].a, [3].a, [4].a];
    console.log(answers);

for (var i = 0; i < answers; i++) {
  if (questions === answers[i]) questions = true;
}
console.log(answers);

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
    console.log("Correct");
  } else {
    console.log("WRONG");
    timeLeft - 20;
  }
}
function beginQuiz() {
   // $("#quiz-card").hide();
   document.getElementById("quiz-card").setAttribute("style","display:none");
   document.getElementById("questions-box").setAttribute("style","display:block");
   document.getElementById("quesions-box").write("questions");
}
$(quizbtn).on("click",()=>{
    time();
    beginQuiz();
});
//$(quizbtn).on("click", questions());