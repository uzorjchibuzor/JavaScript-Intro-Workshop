// constructor function
function Person(name) {
  this.name = name
}

Person.prototype.hello = () => {
  return `Hello, I am ${this.name}.`
}


// es6 class
class Person {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}
class Actor extends Person {
  hello() {
    return super.hello() + ' I am an actor.'
  }
}
var tomCruise = new Actor('Tom Cruise')
tomCruise.hello()

// constructors
// super
class ClassName {
  constructor(props) {
    super(props)
  }
}
// getter
class Person {
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// setters
class Person {
  set age(years) {
    this.theAge = years
  }
}