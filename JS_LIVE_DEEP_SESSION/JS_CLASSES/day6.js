console.log("day6")

function greet(name = "xyz") {
  return `Hello, ${name}`;
}
console.log(greet("codeWithPrashant"));       // Hello, Guest
// console.log(greet("John")); // Hello, John


//rest

function sum(...numbers) {
console.log(numbers)
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

function userDetails(name, age, x, ...skills) {
  console.log("Name:", name);
  console.log("Age:", age);
console.log("x:", x);
  console.log("Skills:", skills);
}

userDetails("Prashant", 25, "React", "Node", "MongoDB");



//scope

function hello(){
    let x = 10; // functional scope
    
    if(true){
        let x = 15 // block level
        console.log("line 36",x) // ???
    }
    console.log("line 38", x)  // ??
}
// console.log(x);

hello()
