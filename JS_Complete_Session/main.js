// // var let const 
"use strict"
// console.log("JS Complete Training");

// // console.log("d", d) // undefined

// let d=10;
// console.log(d)

// var name ="codeWithPrashant"; // global scope and function scope

// var name = "codeWithPrashant2" // redeclare using var
// name = "codeWithPrashant3"

// //global scope  
// {
//    var a =10; 
// }
// console.log("var is global scope",a)


// let name2 = "Welcome" //block scope // u cant redeclare using let
// // let name2 = "Welcome"   //SyntaxError: Identifier 'name2' has already been 


// name2 = "Welcome2" 
// // by using let you can reassign the value

// {
//    let b =10; 
//    console.log(b)
// }
// // console.log("let is block  scope", b)


// const name3 = "Hello....!!"  //block
// // const name3 = "Hello....!!"  //block //SyntaxError: Identifier 'name2' has already been 
// // name3 ="Byee";
// //Assignment to constant variable.

// {
//    const c =15; 
//    console.log(c)
// }
// //  console.log("let is block  scope", c)

// console.log("var==>", name);
// console.log("let==>", name2);
// console.log("const==>", name3);

// datatype

//1 Primitive Datatype. // store single value


// let x1  = "xyz" // string
// let x2  = 1 // string
// let x3  = true // boolean // false
// let x4; // u declare a varibale but did not assign value
// let x5 = null; // absence of value

// //symbol

// // let myname1 = "Prashant";
// // let myname2 = "Prashant";

// let myname1 = Symbol("Prashant");
// let myname2 = Symbol("Prashant");

// if(myname1 == myname2) {
//     console.log("equal value of myname1 and myname2")
// }
// else {
//     console.log("Not equal myname 1 and myname 2")
// }

// // let myname1 = Symbol("Prashant");
// // let myname2 = Symbol("Prashant");


// console.log("Type===>", typeof x1)
// console.log("Type===>", typeof x2)
// console.log("Type===>", typeof x3)
// console.log("Type===>", typeof x4)


// // non-primitive

// // array , object, function

// let arr = [1,2,3,4,"heelllo"]

// let obj = {
//     name : "cwp",
//     city : "Noida"
// }

// function callme(){
//     console.log("Hello function")
// }

// console.log("array type", typeof arr)
// console.log("object type", typeof arr)
// console.log("function type", typeof callme)

//opertors 

// let x =5;
// let y = 8;
// let z = x+y;
// let z = x-y; 
// let z = x*y; 

//airthmatic opertaors

// let a = 10, b = 3; c="3";
// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.33
// console.log(a % b);  // 1 // reminder
// console.log(a ** b); // 1000 10 to power three

// comparison operators  

// if(b===c){
//     console.log("true")
// }
// else {
//     console.log("false")
// }


//logical operator

// || && !

//&& both coonditon should be true (1*0==> 0) 1*1 ===> 1
// || one condition should be true (1+0==>1) (0+1===>1)


// if(9>7 && 4>3){
//     console.log("condition true")
// }
// else {
//     console.log("condition false")

// }
// let r = 10;
// let t = 10

//if else

// if(r!=t){
//     console.log("True")
// } else {
//     console.log("false")
// }

// else if


//  if(5>11) {
//     console.log("if conditon")
//  } else if(5>12){
//     console.log("else if 1 conditon")  
//  }
//  else if(5<8){

//     console.log("else if 2 conditon")

//  }
// else {
//     console.log("No codition match")
// }


// let day = 7;

// switch(day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   default: console.log("Other day");
// }


// let day = 2;
// switch(day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   default: console.log("Other day");
// }

// Ternary Operator

// let age = 17;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);


// Calculator using switch case

// const num1 = parseFloat(prompt("Enter first number:"));
// const num2 = parseFloat(prompt("Enter second number:"));
// const operator = prompt("Enter operator (+, -, *, /):");

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;

//   case "-":
//     result = num1 - num2;
//     break;

//   case "*":
//     result = num1 * num2;
//     break;

//   case "/":
//     if (num2 === 0) {
//       result = "Cannot divide by zero";
//     } else {
//       result = num1 / num2;
//     }
//     break;

//   default:
//     result = "Invalid operator";
// }

//function
// console.log("function");

// function declare

// callMe()


// function callMe(greeting, reply){
//     console.log("Normal function" , greeting, reply );
//     console.log(arguments.length);
//      console.log(this)
// }

// const obj = {
//     name:"Prashant",
//     callMyName: function(){
//         return this.name
//     }
// }

// const obj = {
//     name4:"Prashant",
//     callMyName: ()=> {
//         return this.name4
//     }
// }

// console.log("obj.callMyName", obj.callMyName())

// callMe("Hello Guys", "I am good") // passing arguments


// //arrow function // es6 

// // Cannot access 'callMeArrow' before initialization

// // callMeArrow()

// const callMeArrow = (msg)=> {
//     console.log("Arrow function", msg);
//     console.log(this)
//     // console.log(arguments.length)
// }

// callMeArrow("Hello I am arrow");



// function sum(a, b, ...rest) {
//     console.log(a);      // first number
//     console.log(b);      // second number
//     console.log(rest);   // remaining numbers
// }

// sum(1, 2, 3, 4, 5);

// default parameter

// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet();          // No argument
// greet("Prashant");


// function sum(a = 10, b = 5) {
//     console.log(a + b);
// }

// sum();        // 10 + 5 = 15
// sum(20);      // 20 + 5 = 25
// sum(20, 30);  // 20 + 30 = 50


// immidialty invoke function

// (function () {
//     console.log("IIFE executed");
// })();

// (function(){
//     console.log("Hello from IIFE");
// })();

// (function(a, b){
//     console.log(a + b);
// })(5, 10);


// function scope 


// function scopeFun() {
//     var  a = 10; // function scope
//     console.log(a); 
//     if(true){
//         var a = 15;
//         console.log(a)
//     }
//     console.log(a)

// }
// // console.log(a);

// scopeFun()

//functione expression 


// function callmeAgain(){
//    return "Hello"
// }

// let x =  callmeAgain();

// console.log(x)

// function outer() {
//   let counter = 0;
//  function inner() {
//     counter++;
//     console.log(counter); // 1
//   }
//  return inner;
// }

// const fn = outer() // finish execution
// fn(); // 1
// fn(); //2
// fn(); //3

// function completed














