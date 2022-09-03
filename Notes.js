console.log('Hello World');
console.error('error');

// let, const

let age = 30;
age = 200;

console.log(age);

// Strings, Number, Boolean, null, undefined,

const name = 'Bob';
age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
let z;

console.log(typeof z);

//Concatenation

console.log('My name is ' + name + ' and I am ' + age);

const s = "Hello World";
console.log(s.length); //Not Method
console.log(s.toLowerCase()); //Method Therefore () at end
console.log(s.substring(0, 5).toLowerCase()); //Tack on Mulitple Methods
console.log(s.split('')); //Can split string into array any way

//Arrays

const numbers = new Array(1,2,3,4,5); //Constructor

console.log(numbers);

const fruits = ['apple', '3', true, 33.4] //Dont have to know array length

console.log(fruits[3] + fruits);

fruits.push('mangos');//Can use stack methods
fruits.unshift('creep');//Add to begining of array
fruits.pop();//Remove 'top' value

console.log(fruits.indexOf('creep'));

//objects

const person = {
    firstName: 'john',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '123 main',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName);
console.log(person);
console.log(person.hobbies[1])

//Pulling Out embeded objects

const {firstName, lastname, adress: {city}} = person;

console.log(firstName);

//Adding Properties

person.email = 'john@gmail.com';
console.log(person.email);

//Array of objects

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Metting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Doctors Appointment',
        isCompleted: false
    },
]

console.log(todos[1].text);

//Convert to Jason
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For Loop

for (let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 0; i < todos.length; i++){
    console.log('For Loop Number:' + i + todos[i].text)
}

for(let through of todos){
    console.log(through.text.id);
}

// While Loop
let i = 0;
while (i<10){
    console.log('While Loop' + i);
    i++;
}

// forEach, map, filter

todos.forEach(function(todos){
    console.log(todos.text);
}); //forEach cycles through each leve of the ofjext

const todoText = todos.map(function(todos){
    return todos.text;
}); //Map creates an array of specific arguments or variables in an object

console.log(todoText);

const todoCompleted = todos.filter(function(todos){
    return todos.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

//Conditionals

const p = 10;

if(p === 10){
    console.log('p is 10');
} else {
    console.log('p is Not 10');
}

//Turnery Operator

const h = 10;

const color = h > 10 ? 'red' : 'blue'
//If s > 10 then (?) make color red, esle make color blue
console.log(color);

//switches

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is nothing');
        break;
}

//functions 

function addNums(num1, num2){
    console.log(num1 + num2);
}
console.log(addNums(5 , 5));

//Objects

//Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthTear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return this.firstName + this.lastName;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return this.firstName + this.lastName;
}


//Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Bob', 'Doe', '4-3-2080');

console.log(person1.getFullName());

//Classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        this.firstName + this.lastName;
    }
}
