import { useRef, useState, useEffect } from "react";

const UseRefExamples = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const previousCountRef = useRef(0);

  // Store previous count value
  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  function onFocusInput() {
    inputRef.current.focus();
  }

  function incrementWithoutRerender() {
    countRef.current += 1;
    console.log("Count ref:", countRef.current);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div>Current State Count: {count}</div>
        <div>Previous State Count: {previousCountRef.current}</div>
        <div>Ref Count (No rerender): {countRef.current}</div>
      </div>

      <div className="space-y-4">
        <div>
          <input
            placeholder="Click 'Focus Input' to focus"
            ref={inputRef}
            className="border p-2 rounded mr-2"
          />
          <button 
            onClick={onFocusInput}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Focus Input
          </button>
        </div>

        <div className="space-x-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Increment State (Rerender)
          </button> 
          <button 
            onClick={incrementWithoutRerender}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Increment Ref (No Rerender)
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <p>This example demonstrates three key useRef concepts:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Storing previous state values (previousCountRef)</li>
          <li>DOM element references (inputRef for focus)</li>
          <li>Mutable values without rerenders (countRef)</li>
        </ol>
      </div>
    </div>
  );
};

export default UseRefExamples;
