/* for
forEach
do...while
while
for...in
for...of */

let object = {
	a: 1,
	b: 2,
	c: 3
}

const array = ['a', 'b', 'c']
for (let i = 0; i < array.length; i++) {
	console.log(array[i]) //value
	console.log(i) //index
}

// break{interrupt} and continue{fast forward}

const array2 = ['a', 'b', 'c']
array2.forEach((item, index) => {
	console.log(item) //value
	console.log(index) //index
})
//index is optional
array.forEach(item => console.log(item))

const array3 = ['a', 'b', 'c']
let i = 0
do {
	console.log(array3[i]) //value
	console.log(i) //index
	i = i + 1
} while (i < array3.length)
// break{interrupt} and continue{fast forward}

const array4 = ['a', 'b', 'c']
let j = 0
while (j < array4.length) {
	console.log(array4[j]) //value
	console.log(j) //index
	j = j + 1
}

// The difference between do...while and while
for (let property in object) {
	console.log(property) //property name
	console.log(object[property]) //property value
}

//iterate over the value
for (const value of ['a', 'b', 'c']) {
	console.log(value) //value
}
//get the index as well, using `entries()`
for (const [index, value] of ['a', 'b', 'c'].entries()) {
	console.log(index) //index
	console.log(value) //value
}