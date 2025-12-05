// day 11


// return new array

console.log("day11");


console.log("Array",Array.prototype) //
// how you can create your own custom map method


console.log("Object", Object.prototype)



const arr = [1,2,3,4,5,6,7,8];
let newArr3 = arr.map((num)=>num*2); //double each element

console.log(newArr3)

let newArr = arr.filter((num)=>num%2===0); //even number
let newArr2 = arr.map((num)=>num%2!==0); //even number
// interview  -  foreach vs map // most imp

// filter vs map  // congizent

console.log("using filter", newArr) 
console.log("using map", newArr2) 


// find

const res = arr.find((num)=>num%2===0);  // based on this condition it will give first match  condition element

const resIndex = arr.findIndex((num)=>num%2===0);  // based on this condition it will give first match  condition element

console.log("find", res) // value or element
console.log("findIndex", resIndex) // index

// some

const array = [2, 4, 6, 8, 10];


// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log("every", array.every(even));
// Expected output: true

console.log("some", array.some(even));
// Expected output: true


console.log("indexOF", array.indexOf(4)) // index return
console.log("indexOF", array.indexOf(11)) // index return. -1

// spread opertor
const concatArr = [...arr, ...array];
console.log(concatArr);

const concat2 = arr.concat(concatArr)
console.log(concat2)


// flat 

const flatArr = [1,2,3,4,[5,6,[8,9]], 7]; // interview question
//H.W // how you can flattern array for nested level

console.log(flatArr.flat());

console.log(Array.isArray(concat2));
// Expected output: true


//fill
const array2 = [1, 2, 3, 4];
//fill(value, start, end)
// Fill with 0 from position 2 until position 4
console.log(array.fill(100, 2, 4));

// join

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"


//flatmap











