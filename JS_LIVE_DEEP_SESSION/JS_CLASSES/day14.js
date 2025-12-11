// console.log("Day 14");

// // how to flat the array.

// const arr =  [1,2,3,[4,5,[6,7]], 8, [9,10]];

// const res = arr.flat();
// console.log(res) 

// one of important question

// function flatArr(arr){
//     return arr.reduce((acc, cur)=>{ return Array.isArray(cur)  ? acc.concat(flatArr(cur)) : acc.concat(cur)
//      } , []) 
//    }

// console.log("Flat Array==>", flatArr(arr));

// function count(n){
//     console.log(n); // 4
//     if(n>1){
//         count(n-1)
//     }
// }
// count(5)


// const arr2  = [1,2,3,4,5,6,7]

// console.log(arr2.reduce((acc, cur)=> acc + cur, 5));


// 

// let x  = 10 ; // primitive

// let obj = {
//     name:"Ankit",
//     city:"Delhi"
// }

// console.log(obj.name)
// console.log(obj.Delhi)

// console.log(obj["name"])

let obj2  = new Object()
obj2.myChannel = "codeWithPrahsnat"
obj2.haveyou = "subscibe"

// destructure

let  {myChannel,  haveyou} = obj2

// class //

// inheritance js, interface // typescript 






