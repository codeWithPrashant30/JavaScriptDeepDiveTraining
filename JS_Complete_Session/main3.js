console.log("storage, promises, async await");


// localStorage.setItem("name", "Prashant");

// const value = localStorage.getItem("name")

// console.log("value from local storage", value)

// localStorage.clear()

// session storage

// sessionStorage.setItem("name2", "Prashant");

// const value2 = sessionStorage.getItem("name")

// console.log("value from local storage", value2);


// // ✔ Creating a Cookie
// document.cookie = "username=Prashant; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// // ✔ Reading Cookies
// console.log(document.cookie);


//callback

// function greet(name, callback) {
//   console.log("Hello " + name);

//   setTimeout(() => {
//     callback();
//   }, 2000);}

// greet("Prashant", () => {
//   console.log("Callback executed after 2 sec!");
// });


// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);


// promises

// pending 
// resolve
// reject

const myPromise = new Promise((resolve, reject) => {

  let success = false;

  setTimeout(() => {
    if (success) {
      resolve(" Data fetched successfully!");
    } else {
      reject(" Failed to fetch data!");
    }
  }, 2000);
});


myPromise
  .then(result => {
    console.log(result); // If resolved
  })
  .catch(error => {
    console.error(error); // If rejected
  })
  .finally(() => {
    console.log("Promise main  apko reject ya resolve mil gya check kr lo!"); // Runs always
  });

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("📦 Data received"), 2000);
//   });
// }

// async function getData() {
//   console.log("Fetching...");
//   const data = await fetchData(); // Wait until resolved
//   console.log(data);
//   console.log("Done!");
// }
// getData();

// async function getUser() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//   }
// }
// getUser();




// const p1 = Promise.resolve(10);
// const p2 = new Promise(resolve => setTimeout(() => resolve(20), 1000));
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
//   .then(values => console.log(values)) // [10, 20, 30]
//   .catch(err => console.error("Error:", err));




// const p1 = Promise.resolve(" Success");
// const p2 = Promise.reject(" Failed");
// const p3 = Promise.resolve("⚡ Another success");

// Promise.allSettled([p1, p2, p3]).then(results => console.log(results));



// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 2000));
// const fast = new Promise(resolve => setTimeout(() => resolve("⚡ Fast"), 3000));

// Promise.race([slow, fast]).then(result => console.log(result)); 


// add

