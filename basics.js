/*
Task: Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/ 
let x="1999"
let y= Number(x);
console.log(y)

/*
Task: Mood Checker

Do the following:   
   1. write a script that prompts the user for their current mood.
   2. If the user inputs happy, print 'Yay me too!' to the console, sad print 'Aw cheer up',
   3. Else just print 'So moody!'

*/


let letter = prompt("Enter your mood"); 

// If the letter is "Happy"
if (letter === "happy") {
 console.log ("Yay me too!")
  
// If the letter is "Sad"
} else if (letter === "sad") {
  console.log ("Aw cheer up.")
  
// If the letter is anything else
} else {
 console.log ("So Moody")
}



/*
Task: Odd or Even

Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

*/

var num = 17; // You can change this number!

// write your conditions here

if(num % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: FIZZBUZZ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. 
It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. 
But you won't be one of those people. Here are the rules for the assignment:

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

The one hint you'll likely need is:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". 
It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

If that was confusing, don't worry. It will make more sense as you use it. 
The point is: the remainder operator is useful for finding out if X is a multiple of Y. If it is, then X % Y will yield zero. 
Knowing this should help you complete this assignment without any issue.
*/
for (var i = 1; i < 101; i++) {
   if (i % 15 == 0) console.log("FizzBuzz");
   else if (i % 3 == 0) console.log("Fizz");
   else if (i % 5 == 0) console.log("Buzz");
   else console.log(i);
}

