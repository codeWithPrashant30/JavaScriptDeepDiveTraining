import './App.css';
import { StudentList } from './component/StudentList';
import styled from 'styled-components';
import logo from '../src/logo.svg'
import { useState } from 'react';


const Counter = ()=>{
  // single state variable
const [counter, setCounter] = useState(0); // syntax

const [updateMyInfo, setUpdateMyInfo] = useState({name:"codeWithPrashant", age:30});

const [search, setSearch]  = useState("")

console.log(updateMyInfo);


  return <div className='p-4'>
     <div >
     Value <span className='text-5xl'>{counter}</span>
      </div>
     <button  class="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={()=> setCounter(counter+1)}>
        increase by 1
    </button>
    <button  class="px-4 m-2 py-2 bg-blue-600 text-white rounded-lg" onClick={()=> setCounter(counter-1)}>
        decrease by 1
    </button>

  {/* how to update object using state */}
   <div >
     my Age <span className='text-5xl'>{updateMyInfo.age}</span>
      </div>
   <button  class="px-4 m-2 py-2 bg-blue-600 text-white rounded-lg" onClick={()=> setUpdateMyInfo({...updateMyInfo, age :32})}>
      Update My Object
    </button>

    <input style={{color:"#000"}} placeholder='Enter your Name' onChange={(e)=>setSearch(e.target.value)} value={search}>

    </input>
    <div>{search}</div>
  </div>

}

function App() {

// usestate
//Array Destructing //es6
// const [first, second] = [1,2]

// console.log("first", first)
// console.log("second", second)




// useState(0) // 0 intial value
// counter -- varibale
//setCounter -- function for updating  value of this counter variable


  const students = [
    { id: 1, name: "Prashant", age: 25 },
    { id: 2, name: "Aman", age: 23 },
    { id: 3, name: "Neha", age: 22 },
    { id: 4, name: "Neha", age: 23 },
    { id: 1, name: "Prashant", age: 25 },
    { id: 2, name: "Aman", age: 23 },
    { id: 3, name: "Neha", age: 22 },
    { id: 4, name: "Neha", age: 23 },
    { id: 5, name: "Prashant", age: 25 },
    { id: 6, name: "Aman", age: 23 },
    { id: 7, name: "Neha", age: 22 },
    { id: 8, name: "Neha", age: 23 }
  ];

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const images = [
  { src: "/assets/logo.png", alt: "logo1" },
  { src: "/assets/logo.png", alt: "logo2" },
  { src: "/assets/logo.png", alt: "logo3" },
];


const DisplayImages = ({ images }) => {
  console.log(images)
  return (
    <div className="flex justify-center flex-wrap gap-4 border">
      { images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            style={{border:"1px solid #ccc"}}
            alt={img.alt || "image"}
            className="w-40 h-40 object-cover rounded-lg"
          />
        ))}
    </div>

  );
};

  // let arr = [1,2,3]
  return (
    <div className="App">
      <header className="flex justify-center">
        <img src={logo} alt='logo'  className="w-20 h-20 "/>
      </header>
     {/* <DisplayImages images={images}/> */}

      <h1 class="text-5xl font-bold text-green-500">MERN STACK | 26 days</h1>

        {/* <p>This is my first React Application</p> */}

  
      <div style={{border:"1px solid #fff"}}>
        <h3  style={{color:"#fff"}}>
        Counter Component
      </h3>
        <Counter/>
      </div>
   
        {/* <Welcome greetings="Hello Everyone, How are you ?" myYTchannelName="codeWithPrashant1"  arr = {arr}/> */}
        {/* <Button $primary>Primary Button</Button>
        <Button>Secondary Button</Button>
        <StudentList students={students}/> */}
    </div>
  );
}

export default App;
