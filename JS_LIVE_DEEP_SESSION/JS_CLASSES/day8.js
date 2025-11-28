console.log("Day 8");
// console.log(document)

//select element by id
const element = document.getElementById("myid");

console.log("id selectore", element)


//select element by className 
//HTML Collection

const element2 = document.getElementsByClassName("myclass");
console.log("select element by class",element2)


// select element by tag name

const element3 = document.getElementsByTagName("p");
console.log("select element by tagname", element3)

// select element by query selector

const element4 = document.querySelector("#myid");
console.log("select element by query selector", element4)

// select element by queryselectorall
const element5 = document.querySelectorAll("#myid");
console.log("select element by query selector all", element5)