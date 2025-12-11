import './App.css';
import logo from '../src/logo.svg'
import UseRefExamples from './components/UseRefExamples';

function App() {
  return (
    <div className="App">
      <header className="flex justify-center">
        <img src={logo} alt='logo' className="w-20 h-20" />
      </header>

      <h1 className="text-5xl font-bold text-green-500">React Hooks Examples</h1>

      <div className="p-8 space-y-8">
        <section className="border border-gray-300 p-4 rounded">
          <h2 className="text-3xl font-bold mb-4">useRef Example</h2>
          <UseRefExamples />
        </section>

     
     
      </div>
    </div>
  );
}

export default App;
