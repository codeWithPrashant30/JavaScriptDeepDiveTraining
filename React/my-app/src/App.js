import './App.css';
import { StudentList } from './component/StudentList';
import { Welcome } from './component/Welcome';

function App() {
  const students = [
    { id: 1, name: "Prashant", age: 25 },
    { id: 2, name: "Aman", age: 23 },
    { id: 3, name: "Neha", age: 22 },
    { id: 4, name: "Neha", age: 23 },
    { id: 1, name: "Prashant", age: 25 },
    { id: 2, name: "Aman", age: 23 },
    { id: 3, name: "Neha", age: 22 },
    { id: 4, name: "Neha", age: 23 }
];
  // let arr = [1,2,3]
  return (
    <div className="App">
        <h1>My React Application</h1>
        <p>This is my first React Application</p>
        {/* <Welcome greetings="Hello Everyone, How are you ?" myYTchannelName="codeWithPrashant1"  arr = {arr}/> */}
        <StudentList students={students}/>
    </div>
  );
}

export default App;
