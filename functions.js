/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax


/*

------------
function myFunction() {
console.log("Function was invoked!");
};

myFunction();
----------------

let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

---------------

let add = function (param1, param2) {
  return param1 + param2;
};

add(1,2);

*/


const myFunction = () => {
  console.log("Function was invoked!");
};
myFunction();





 
let anotherFunction =(param) =>{
  return param;
};

anotherFunction("example");





let add = (param1, param2)=> {
  return param1 + param2;
};

add(1,2);

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function game(user, computer){
    /*add your code here*/
}

// 1 = rock
// 2= paper
// 3 =sisscer

let myNum1 = Math.floor((Math.random()* 3 )+ 1);
let mychioce = prompt("you a number from 1-3")
function game (person ){
  if( myNum1 === person){
    console.log("draw");
  }
  else if( myNum1 === 1 && person == 2){
    console.log("person win");
  }
  else if( myNum1 === 1 && person == 3){
    console.log("computer win");
  }
  else if( myNum1 === 2 && person == 1){
    console.log("computer win");
  }
  else if( myNum1 === 2 && person == 3){
    console.log("person win");
  }
  else if( myNum1 === 3 && person == 2){
    console.log("computer win");
  }
  else if( myNum1 === 3 && person == 1){
    console.log("person win");
  }
};







