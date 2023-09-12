// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
  }
  
  // Write your intern objects here:
  
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  
  // Kennan's ID
  
  // Keven's email
  
  // Gannie's name
  
  // Antonietta's Gender
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  

  const intern1 = {
    id: 1,
    email: "mmelloy0@psu.edu",
    firstName: "Mitzi",
    gender: "F"
  };
  
  const intern2 = {
    id: 2,
    email: "kdiben1@tinypic.com",
    firstName: "Kennan",
    gender: "M"
  };
  
  const intern3 = {
    id: 3,
    email: "kmummery2@wikimedia.org",
    firstName: "Keven",
    gender: "M"
  };
  
  const intern4 = {
    id: 4,
    email: "gmartinson3@illinois.edu",
    firstName: "Gannie",
    gender: "M"
  };
  
  const intern5 = {
    id: 5,
    email: "adaine5@samsung.com",
    firstName: "Antonietta",
    gender: "F"
  };
  
  
  intern2.speak = function() {
    return "Hello, my name is " + this.firstName + "!";
  };
  
  intern5.multiplyNums = function(num1, num2) {
    return num1 * num2;
  };
  
  console.log(intern2.speak()); // "Hello, my name is Kennan!"
  console.log(intern5.multiplyNums(3, 4)); // 12