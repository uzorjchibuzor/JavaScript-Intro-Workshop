/*
  var, let, and const
*/

var a
const typeOfA = typeof a === 'undefined'
console.log(typeOfA)

// scope
// global object has a global scope
// local scope and local variables

// What is hoisting?

/*
All variable in a scope are referenced in the beginning.
JavaScript before executing the code actually moves all variables on top
*/

// let - the block scoped version of var
for (let i of 'string') {
	console.log(i)
}

/*
Variables declared with  var or  let can be changed later on in the program, and reassigned.
A once a  const is initialized, its value can never be changed again, and it can’t be reassigned
to a di×erent value.
We use const for a value that does not change oftens
*/


/*
const does not provide immutability, just makes sure that the reference can’t be changed.
const has block scope, same as  let .
*/

const name = 'FeeCodeCamp'
name
// name = 'Workshop'

// name = 'Ibadan'