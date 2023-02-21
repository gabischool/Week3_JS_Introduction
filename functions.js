/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax





let myFunction = () => {
  console.log("Function was invoked!");
  };
  
  myFunction();
  
  let anotherFunction = (param) => {
    return param;
  };
  
  anotherFunction("Example");
  
  
  
  let add = (param1, param2) => {
    return param1 + param2;
  };
  
  add(1,2);
  
  
  
  
  
  /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
  
  /*
  Create a global variable that randomly generates the computer's choice
  Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  HINT: While you can complete this with only conditionals based on strings, it may help to equate
   choice to a number when using Math.random()
  Use the game function below to do the following:
    1. Receive 2 parameters the user's choice and the computer's choice
    2. Return whether the user won, lost, or tied based on these rules of the game described below - 
    the strings returned need to match the strings below exactly.
     - win should return "you win!"
     - lose should return "you lose!"
     - tie should return "it's a tie"
    
    RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors |
     Or there's a tie
    
    HINT: Remember that the order in which we pass in our arguments matters when
     it comes to parameters
  // */
  
  // function game(user, computer){
  //     /*add your code here*/
  // }
  
  let computerChoice;
  
  computerChoice = Math.random();
  
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  
  //  function to play the game
  function game(userChoice, computerChoice) {
    if (userChoice === "rock") {
      if (computerChoice === "rock") {
        return "it's a tie";
      } else if (computerChoice === "paper") {
        return "you lose!";
      } else {
        return "you win!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "you win!";
      } else if (computerChoice === "paper") {
        return "it's a tie";
      } else {
        return "you lose!";
      }
    } else {
      if (computerChoice === "rock") {
        return "you lose!";
      } else if (computerChoice === "paper") {
        return "you win!";
      } else {
        return "it's a tie";
      }
    }
  }
  
  let result = game("rock", computerChoice);
  
  console.log(result);