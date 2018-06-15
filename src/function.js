function functionName(parameters) {
  return 'a new function crreated'
}
functionName(arguments)

// Syntax
// Named function and anonymous functions
// Parameters and Arguments

// Nested functions
function function1() {
  let first = 'First Function'
  return function () {
    return `${first} was called inside the secong function`
  }
}

// Closure -Closed local varialble are availa
function add(a) {
  return function (b) {
    return a + b
  }
}
// A function that return a function

// Arrow Functions
const myFunction = () => {
  return 'my First Function'
}
myFunction()

// this in  functions 
// Constructor FUnctions
let fccIbadan = {
  name: 'FreeCodeCamp Ibadan',
  meetings: 'monthly',
  greeting: function() {
    return `${this.name} welcomes you all to her ${this.meetings} meetup`
  },
  version2: () => {
  return `${this.name} welcomes you all to her ${this.meetings} meetup`
  }
}

// Function Hoisting

// IIFE

(()=> {
  return 'I am IIFE'
})()
// Write a function to add 2 numbers. add(a, b)
// Write a function that add two numbers and it takes the third parameter as another function argument.add(a, b)(c)

// default Parameters 

function subtract(a = 10, b = 2) {
  return a - b
}

subtract(50, 7)
subtract()


// Write a function that add two numbers and it takes the third parameter as another function argument.add(a, b)(c)

