// console.log("Hello World");
// // let string = parseInt(prompt("Enter your name for greeting "));

// var fun = "10393mdl";
// function hello(){
//     let text = "djkdkkjddkkfs";
//     console.log(text)
// }

// var fun;
// console.log(fun);
// hello();

// Data types

// Number types -> integer, float, infinity, -infinity, NaN,
// Big int -> above 2 power 53 :: to convert bigint use var x = 34n
// var x = 445n;

// let number = 1;
// let num1 = 5.6;
// console.log(typeof(num1))

// string -> single quote, double, backtick

// task greeting to the user;

// let username = prompt("Enter your name");
// let greeting = "Good Morning :)";
// console.log("Hello " + username + " " + greeting);
// let backtick = `dijkfklfmlfklf
// dkmdlkld
// dlkmklmf
// mkfdklf

// kmmdfkmkf`;
// console.log(backtick)

// using backtick concatenate string

// let output = `hello ${username}, ${greeting}`;
// console.log(output);

// // big int
// var a = 3453n;
// console.log(typeof(a));

// // boolean
// true, false;

// // null
// let a = {};
//     a = null;

// // undefined
//     let ar;

// // object
// let user = {name : 'arun', age : 21, address: 'This Universe'};

// // task2 add college and value to the object;

// Object.freeze(user);
// user.college= 'Kongu Engineering College';

// console.log(user);
// delete user.college;

// delete a;
// console.log(user)

// // task3 print only keys and print only values
// let user = {name : 'arun', age : 21, address: 'This Universe'};

// console.log(Object.keys(user));
// console.log(Object.values(user));

// // normal function in js
// function isValidEmail(email){
//     if(email === 'asdf@gmail.com'){
//         return true;
//     }
//     return false;
// }

// console.log(isValidEmail('asdf@gmail.com', 848));

// arrow function ES6
// const isValidEmail = (email) => (email === 'arunpragash');

// console.log(isValidEmail('arunpragash'));
// console.log(isValidEmail());

// task5 create a function sum and provide two value and return to add a number; if the parameter is value add it else print one of the parameter is string

// const sum = (num1, num2)=>{
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 + num2);
//     } else {
//         console.log("One of the parameter is string");
//     }
// }

// sum(10,20);
// sum("string", 39);

// array  -> heterogenous elements;

// let arr = [1, 'arun', true, () => 0, null, undefined]
// console.log(arr[1]);
// console.log(arr[3]());

// pass function as a parameter to a function

// // here calculate is a higher order function
// const calculate = (num1 , num2, operator) => {
//     return operator(num1, num2);
// }

// // here addition is a call back function
// const addition = (num1, num2) => num1 + num2;

// console.log(calculate(10, 40, addition));

// let array = [1,2,3,4,5];
// array.unshift(0);
// array.shift();
// array.pop();

// array.splice(1,0,33,34,56,7,86,432,12);
// array.splice(1,2,9887,9983);
// console.log(array);

// task 5

// let array =[1,2,3,4,5];

// array.splice(2,0,300,400);
// console.log(array);

// array.splice(1,4);
// array.splice(2,1,300,600);
// console.log(array);

const student = [
  { name: "arun", age: 21, isActive: true },
  { name: "nithish", age: 21, isActive: false },
  { name: "hari", age: 21, isActive: true },
  { name: "tamilselvan", age: 20, isActive: false },
  { name: "ukesh", age: 20, isActive: false },
  { name: "selvabharathi", age: 21, isActive: false },
  { name: "shanmugapriyan", age: 20, isActive: true },
  { name: "saravana", age: 21, isActive: true },
  { name: "senthilraja", age: 20, isActive: true },
  { name: "Dharun", age: 21, isActive: false },
  { name: "Dharani", age: 20, isActive: false },
];

// either print usinf for loop
// for(var i = 0; i < student.length; i++){
//     if(student[i].isActive === true){
//         console.log(student[i]);
//     }
// }

// else print using filter function

// const activefilter = student.filter((each_student) => each_student.isActive === true);
// const agefilter = student.filter((each_student) => each_student.age === 21);
// const activefind = student.find((each_student) => each_student.age === 21);
// const activefindindex = student.findIndex((each_student) => each_student.age === 21);

// console.log(activefilter);
// console.log(agefilter);
// console.log(activefind);
// console.log(activefindindex);

// Map Function

// const maparray = [1,2,3,4,5].map((value)=> (value * 9));
// console.log(maparray)

// let a = [1,2,3,4,5];
// a = a.map((value) => (value *7));
// console.log(a);

// Destructuring - object , array

// // object Destructuring
// const obj = {
//     college : 'Kongu',
//     id : 1,
//     dept : 'computer science',
// }

// const {college} = obj;
// const { dept : department} = obj;
// console.log(college, department);
// console.log(obj);

// array destructuring

// const array = ['apple', 'pine', 'carrot'];

// const[fruit,fruit1,vegetable] = array;

// console.log(vegetable);

// DOM Manupulation

// const root = document.getElementById("demo");
// root.style.color = "green";

// const classelement = document.getElementsByClassName("classcontainer");

// const changecolor = () => {
//   let maxVal = 0xffffff; // 16777215
//   let randomNumber = Math.random() * maxVal;
//   randomNumber = Math.floor(randomNumber);
//   let randColor = randomNumber.toString(16);
//   classelement[0].style.color = randColor;
// };

// for(var i = 0; i < 10; i++){
//     setTimeout(changecolor, 3000);
// }


// add content to the htmll

// const root = document.getElementsByClassName("classcontainer");
// root[0].innerHTML = "<h1>Welcome to world of GAME</h1>";

const root = document.getElementById("root");
root.innerHTML = '<p class="bg">Hello World</p>';
