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
  
  const interns = {
    intern1 : {
      id: 1,
      email: 'mmelloy0@psu.edu',
      name: 'Mitzi',
      gender: 'F',
    },
    intern2 : {
      id: 2,
      email: 'kdiben1@tinypic.com',
      name: 'kennan',
      gender: 'M',
      speak: function () {
        return `hello my name is ${this.name}`;
      }
    },
    intern3 : {
      id: 3,
      email: 'kmummery2@wikimedia.org',
      name: 'keven',
      gender: 'M',
    },
    intern4 : {
      id: 4,
      email: 'gmartinson3@illinois.edu',
      name: 'gannie',
      gender: 'M',
    },
    intern5 : {
      id: 5,
      email: 'adaine5@samsung.com',
      name: 'Antonietta',
      gender: 'F',
      multiply: function(num1, num2){
        return num1 * num2;
      }
    },
  }
  
  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
    console.log(interns.intern1.name)
  // Kennan's ID
  console.log(interns.intern2.id)
  // Keven's email
    console.log(interns.intern3.email)
  // Gannie's name
  console.log(interns.intern4.name)
  // Antonietta's Gender
  console.log(interns.intern5.gender)
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());
    
    console.log(interns.intern2.speak())

  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  console.log(interns.intern5.multiply(2,4))
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  