// const obj1 = {
//     name:"codeWithPrashant"
// }
// const obj2  = obj1;
// obj2.name = "codeWithPrashant2"
// console.log("obj2", obj2)
// console.log("obj1", obj1)

// let x = 10;
// let y = x;
// y = 15
// console.log("y", y)
// console.log("x", x)

// const obj3 = new Object();
// obj3.city = "Noida"
// console.log(obj3)


// // constructor function

// function Person(name, age){
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Aman", 21);
// const p2 = new Person("Vaibhav", 22);

// console.log(p1)
// console.log(p2)

const parent = { role:"student" };
const child = Object.create(parent);
child.name = "chintu"; // add
child.city = "america"; // add

"name" in child
if(child.hasOwnProperty("name")) {
    console.log("exist")
}
// child.keys(obj).includes("name")


// delete child.name
//Looping Through an Object
console.log(child);

for (let key in child) {
    console.log(key + "  " + child[key])
}

console.log("keys",Object.keys(child));
console.log("Values",Object.keys(child))
console.log("Values",Object.entries(child))

// you can not modify the property of the object

Object.freeze(child);

// Object.seal(child);
// it will allow you to modify


child.name = "mintu"

console.log(child)

let  child2 = {
    name:"Titu",
    city:"Noida"
}

let value = child2?.profession ?? "Ye undefined hai"

console.log("value", value)

// user?.address?.city    



const newObj = {...child2, name:"Titu2"}

console.log(newObj);



// JSON Method (Not recommended for Dates, Functions)
// const deepCopy = JSON.parse(JSON.stringify(user));

// spread operator

















