let array = []
array
// Never use array like this - new Array()
function randomNumber(limit) {
	return Math.floor(Math.random() * limit) + 1
}
Array(6).fill(9)
Array.from('string')
const newArray = Array.from({
	length: 50
}, () => randomNumber(10))
console.log(newArray)

// Get the length of an array

// iterate through and array using for loop

// map

// filter

// forEach

// some and every

// split(' ') and join(' ')

// [].concat(['s'])

// reduce
;
[1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
	console.log(array)
	return accumulator * currentValue
}, 1)
// iteration 1: 1 * 1 => return 1
// iteration 2: 1 * 2 => return 2
// iteration 3: 2 * 3 => return 6
// iteration 4: 6 * 4 => return 24
// return value is 24

// sort
newArray.sort((a, b) => {
	return b - a
})

// slice(start)
// slice(start, end, length)

// Spread and rest operators

// Array destructuring

// Adding to an array
// add to the end
// add at the beginning

// Removing an item from an array
// removing to the end
// removing at the beginning

// Join multiples arrays

// Lookup the array for a specific element
// ES5, ES6, ES7
newArray.indexOf()
newArray.lastIndexOf()
newArray.find((element, index, array) => {
	//return true or false
	console.log(array)
})
newArray.findIndex((element, index, array) => {
	console.log(array)
	//return true or false
})
let i = 3
let value = [2, 6]
newArray.includes(value)
newArray.includes(value, i)

// Get a portion of an array