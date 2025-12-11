console.log("Day 13")


//how to remove duplicate element from the array.
// recursion
// flat array - [1,2,3,4,[5,6]], 10] // [1,2,3,5,6,10];


const arr  = [1,2,2,3,4,5,5,6] 
console.log(arr)

// remove element   by setMethod
// const withOutDuplicateElement = [...new Set(arr)];
// console.log("removeElement", withOutDuplicateElement);



// without set method  

// using map

let newArr = [] // global arr
function removeDuplicateElement(arr){
    arr.map((num)=>{
        // if block will execute on the tru condtion
        if(!newArr.includes(num)) {
             newArr.push(num)
        }
    })
    return newArr
}   

// console.log(removeDuplicateElement(arr))

//filter 


const unique  = arr.filter((value, index)=> arr.indexOf(value)=== index)

// 0 === 0  ===> 1
// 1 === 1 ====>2

// null ==== 3 // flase

console.log(unique)
