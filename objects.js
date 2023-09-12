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
const info1 = {
  id: 1,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
}
console.log(info1)

//-------------------
const info2 = {
  id: 2,
  name: "kennan",
  email: "kdiben1@tinypic.com",
  gender: "m",
}
console.log(info2)

//------------------
const info3 = {
  id: 3,
  name: "keven",
  email: "kmummery2@wikimedia.org",
  gender: "m",
}
console.log(info3)

//------------------
const info4 = {
  id: 4,
  name: "Gannie",
  email: "kmummery2@wikimedia.org",
  gender: "m",
}
console.log(info4)

//------------------------
const info5 = {
  id: 5,
  name: " Antonietta",
  email: "adaine5@samsung.com",
  gender: "f",
}
console.log(info5)
  
  // Write your intern objects here:
  
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(info1.name)
// Kennan's ID
console.log(info2.id)
// Keven's email
console.log(info3.email)
// Gannie's name
console.log(info4.name)
// Antonietta's Gender
console.log(info5.gender)
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
   
  let objectKennan =[];
  console.log();

  objectKennan.speak = function () {
    console.log('Hello, my name is Kennan!');
  }


  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  