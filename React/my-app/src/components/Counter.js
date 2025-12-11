import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter value:", counter);
  }, [counter]);

  return (
    <div className='p-4'>
      <div>
        Value <span className='text-5xl'>{counter}</span>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setCounter(counter + 1)}>
        increase by 1
      </button>
      <button className="px-4 m-2 py-2 bg-blue-600 text-white rounded-lg" onClick={() => setCounter(counter - 1)}>
        decrease by 1
      </button>
    </div>
  );
};

export default Counter;
