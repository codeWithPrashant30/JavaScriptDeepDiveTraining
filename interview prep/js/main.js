// 

// var x = 1;
// var x = 5

// function User(name) {
//   this.name = name;
// }

// const u = new User("Prashant");
// console.log(u);
// console.log(u.name); // Prashant


// const obj = {
//   name: "P",
//   arrow: () => {
//     console.log(this);
//   }
// };
// obj.arrow(); 


// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent capturing");
}, true);

document.getElementById("child").addEventListener("click", () => {
  console.log("Child capturing");
}, true);


