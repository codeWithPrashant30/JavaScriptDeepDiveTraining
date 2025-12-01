// DOM  // array  // objects


//tree
//root

//head
//body --> section --> heading /paragraph

// console.log(document)


// //selecting element
// let element = document.getElementById("myid");
// // let element = document.getElementsByClassName("myclass");
// // let element = document.getElementsByTagName("div");
// // let element = document.querySelectorAll(".myclass");

// // element.innerText= "Hello"
// element.innerHTML= "<h2>Helloo inner HTML</h2>"

// element.style.color = "red" 

// element.setAttribute("class", "myclassfromjs")
// console.log(element.getAttribute("class"))

// element.addEventListener("mouseenter", ()=>{
//     element.style.color = "green" 
// } )
// element.addEventListener("mouseleave", ()=>{
//     element.style.color = "pink" 
// } )

// const newElement  = document.createElement("div");
// newElement.classList.add("newClass");
// newElement.textContent = "Hello New Div"
// newElement.style.border = "1px solid #fff"
// document.body.append(newElement);   // correct place to append

// array 


// const arr = [1, 2, 3, 4, 5,6];

// console.log(arr[3]) //index

// //mehtod of arr

// arr.push() // add new element at last
// arr.pop() // remove last element
// arr.shift() // remove element form begining
// arr.unshift(1) // add element in begning
// console.log("Original arr", arr)

// arr.splice(2,2,8,9);

// console.log("After operation of the arr", arr);

// let newArr = arr.slice(2,3)
// console.log(newArr) // extract 

// const arr1 = [10, 20, 30, 40, 50];

// const result = arr1.slice(1, 4);

// console.log(result); // extract 


// console.log("length", arr.length);

// let value = arr.map((num)=>{
//     return num
// }) 

// console.log(value)

// arr.map((num)=>console.log(num)) // return something always

// const filterArr = arr.filter((num)=>num%2===0);

// //reducer 

// const res = arr.reduce((acc, cur)=> acc+cur, 0)
// // console.log(res)

// // console.log(arr.includes(12));

// // let result2 = arr.find((num)=>num%2===0)
// // console.log(result2)

// let result2 = arr.findIndex((num)=>num%2===0)
// console.log(result2)

// // const index = arr.indexOf(100);
// // console.log(index)

// //flat

// const a = [1,2,3,4, [5,6,7,[8.9,10]]];

// let b  = a.flat();

// console.log(b);


//for in  // for of  

//object


// object literal 

let obj =  {
    greeting :"Hello",
    msg:"Thanks"
}

// second way to create object by new Keyword
 

//  let newObj  = new Object();
 let newObj  = {};
 console.log(newObj)

 newObj.name = "Prashant";
 newObj.city = "Noida";

 console.log(newObj)


 // how to access the  valure of object

console.log(newObj.name)
console.log(newObj.city)

console.log(newObj["name"])
console.log(newObj["city"])


// Object.keys , Object.Values , Object.entries

let keys = Object.keys(newObj);
let values = Object.values(newObj);

console.log("keys", keys);
console.log("values", values);
console.log("entries", Object.entries(newObj));

// Object.create()

//object assign 


const newObj2 = {
    ...obj,
    city:"Agra"
}


console.log(newObj2);

const arr2 = [1,2,3];
const arr3 = [4,5,6]

let res = [...arr2, ...arr3]

console.log(res)

const user = {
    name: "Prashant",
    age: 25
};

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("city")); // false







































