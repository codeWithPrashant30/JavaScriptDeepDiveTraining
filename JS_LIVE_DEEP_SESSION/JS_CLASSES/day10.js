// array

const arr  = [1,2,3,4,5];




console.log("arr length", arr.length)

console.log("arr first element", arr[0]);
console.log("arr first element", arr[arr.length-1]);

console.log(arr.at(3)) 

const newArr  = new Array(6,7,8,9,10);

console.log(newArr);

console.log("Array Type", typeof newArr);
console.log("Original Array",arr);

// original array  - changed
// push

arr.push(6); // its add element at last
arr.pop(); // its removed last element
arr.shift() // its remove element from begining.
arr.unshift(0) // its add at begining

console.log("element is available or not in the arry ==> true or false", arr.includes(10));

arr.splice(1, 2, 10, 11);

// for(i=0; i <= arr.length; i++){
//     console.log("i", arr[i])
// }

//foreach
// arr.forEach((num)=>console.log("forEach", num))
let value1 = arr.forEach((num)=>{
   return num
});
console.log(value1)


console.log("Original Array after update", arr);


// original array will not change

let value = arr.map((num, index)=>{
    console.log(index)
   return num*2
});

console.log("Originial Arr", arr)
console.log("value", value)




















