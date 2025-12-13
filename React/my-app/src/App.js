import './App.css';
import UseRefExamples from './components/UseRefExamples';
import UseEffectVsUseLayoutEffect from './components/UseEffectVsUseLayoutEffect';
import ForwardRefExample from './components/ForwardRefExample';
import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-green-500">React Hooks Examples | Day 31 | MERN</h1>

      <div className="p-8 space-y-8">
        {/* <section className="border border-gray-300 p-4 rounded">
          <h2 className="text-3xl font-bold mb-4">useRef Example</h2>
          <UseRefExamples />
        </section>

        <section className="border border-gray-300 p-4 rounded">
          <h2 className="text-3xl font-bold mb-4">useEffect vs useLayoutEffect</h2>
          <UseEffectVsUseLayoutEffect />
        </section> */}

        <section className="border border-gray-300 p-4 rounded">
          {/* <h2 className="text-3xl font-bold mb-4">forwardRef Example</h2> */}
          {/* <ForwardRefExample /> */}

          {/* <UseRefExamples/> */}
          {/* <Posts/> */}
          <UseEffectVsUseLayoutEffect/>

        </section>
      </div>
    </div>
  );
}

export default App;
