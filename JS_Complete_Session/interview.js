
//this 
// "use strict"

// console.log(this) // global level // window object

// function callMe(){
//     console.log(this)  // it has own this // 
// }
// callMe()


// const callMe2 = ()=>{
//     console.log(this) // it dont has this ,  lexical scope se leta hai 

// }
// callMe2()


// let object = {
//     name:"codeWithPrashant",
//     subscribeMychannel: ()=> {
//         return this.name
//     }
// }

// console.log(object.subscribeMychannel())

// function greet(city, country) {
//     console.log(`Hello ${this.name1}, from ${city}, ${country}`);
// }

// const user = { name1: "Prashant" };

// // greet.call(user, "Noida", "India");

// // greet.apply(user, ["Noida", "India"]);

// const greetUser = greet.bind(user, "Noida", "India");

// greetUser()


// document.getElementById('parent').addEventListener('click', () => {
//   console.log('Parent clicked');
// });

// document.getElementById('child').addEventListener('click', () => {
//   console.log('Child clicked');
// });

document.getElementById('parent')
  .addEventListener('click', () => {
    console.log('Parent clicked');
  }, true); // capturing enabled

document.getElementById('child')
  .addEventListener('click', () => {
    console.log('Child clicked');
  }, true);


