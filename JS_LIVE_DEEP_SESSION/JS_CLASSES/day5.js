"use strict"
console.log("Day 5 of JS - function");

//normal function
// callMe();

function callMe(name, city) {
    console.log("Hello First function===>" , name, city)
    // console.log(arguments)
     console.log(this);
}

callMe("codeWithPrashant", "Noida"); //arguments

//arrow function  

const  callMe2 =  (greeting)=>{
    console.log("Arrow Function")
    console.log(this);
    console.log(greeting)
}

callMe2("Hello How are you ?")

//function expression

const add = function(a, b) {
  return a + b;
};
const res = add(2,3);
console.log(res)

// function outer() {
//   let a = 10;

//   function inner() {
//     let y = 5;
//     console.log("a", a); // Can access "a"
//     console.log(y)
//   }
//   inner();
// }
// outer();

let x = 5;
const outer = () => {
  let y = 10;
 const inner = () => {
    console.log(x + y); // 15
  };
 inner();
};
outer();



