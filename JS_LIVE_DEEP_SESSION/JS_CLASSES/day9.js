console.log("Day 9 | js class");

console.log("Day 8");
// console.log(document)

//select element by id
const element = document.getElementById("myid");

const btn  = document.getElementById("btn");

btn.addEventListener(
    "click" , changeText
)

function changeText() {
    element.classList.toggle("red");
}

const newDiv = document.createElement("div");
 // Create element
newDiv.textContent = "Hello World!";          // Add text

document.body.appendChild(newDiv);            // Append to body

// const box = document.querySelector(".show");
element.style.fontSize = "50px";
element.style.color = "red";
element.style.padding = "30px";

const removeEl = document.querySelector(".show");
removeEl.remove();








// console.log("id selectore", element)

// element.innerText = "welcome to the codeWithPrashant | JS Deep dive live"

// element.innerHTML = "<h2> Dom manipulation </h2> <p>...Hello</p>";

// element.classList = "myfirst second third"

// element.setAttribute('data-id','12345');

// let id =  element.getAttribute("data-id");

// console.log(id);







//select element by className 
//HTML Collection

// const element2 = document.getElementsByClassName("myclass");
// console.log("select element by class",element2)


// // select element by tag name

// const element3 = document.getElementsByTagName("p");
// console.log("select element by tagname", element3)

// // select element by query selector

// const element4 = document.querySelector("#myid");
// console.log("select element by query selector", element4)

// // select element by queryselectorall
// const element5 = document.querySelectorAll("#myid");
// console.log("select element by query selector all", element5)