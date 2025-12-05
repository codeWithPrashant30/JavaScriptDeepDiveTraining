console.log("Day 12 | logical question");

// 1. how to reverse string in JS

// hello --->olleh
//easy way
let str = "Hello" // global variable

function reverse(str){
    let res = str.split("").reverse().join("")
   return res;
}

// console.log(reverse(str));


//without split 

// function withOutJSMehtod(str) {
//     let result = ""; 
//     for(let char of str) {
//         console.log(char)
//         result = char + result 
//         // H + "" // H 
//         // H + e // eH 
//         //eh +l //elH    }
//         return result
//     }
// }
// withOutJSMehtod(str);

// using map  - u need to reverse this string


// 2 find the missing number into the array  1 to n

const arr  = [1,2,3,4,5,6,7,8,10]; // 1 ---> 5 

//logic 

// n --> length ==> (arr.length) + 1 // length is 5 of teh array
 //  total = (n*(n+1)/2) 

let n = arr.length+1
let total =  (n*(n+1)/2)
console.log("Toal", total)
let arrNumberToal = arr.reduce((acc,current)=>acc+current,0)
console.log("arrNumberToal", arrNumberToal)
let res  = total - arrNumberToal
console.log("missing number is" , res)










