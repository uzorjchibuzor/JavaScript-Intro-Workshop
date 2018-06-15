// Objects
// create a new object
let obj = { name: 'Frecodecamp', age: 3, value: 'Non profit', cost: 'free' }
let PureObj = Object.create(null)

console.log(obj)
console.table(obj)
// delete using delete property or set to undefined

// iterate through an obj value using for of loops

// spread and rest

// desctructiong of objects
const csvFile = '1993, June, 12, MKO Abiola, mko@money.com, Abeokuta'
const { 2: Month, 3: day } = csvFile.split(',')

JSON.stringify(obj, null, 4)

// Class Work
/* create an array with duplicate value and create a function that return a clean array.
Flatten a multi- dimensional Array
Write a function that return an object and destructure the variable in the object out.
 */

















// solution

const removeDuplicate = arr => [... new Set(arr)]
const flatted = [].concat(...arr)
function flatten(arr) {
  const flattened = [].concat(...arr)
  return flattened.some(item => {
    Array.isArray(item) ? flatten(flattened) : flattened
  })
}
const returnObj = () => ({
  a: 1,
  b: 2,
  c: 3
})
const { first, second, third } = returnObj()
console.log(first, second, third)