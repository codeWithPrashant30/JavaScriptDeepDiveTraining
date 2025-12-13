import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseEffectVsUseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect ran');
    // This runs after the render is committed to the screen
    if (count === 0) {
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect ran');
    // This runs synchronously immediately after React has performed all DOM mutations
    // It's useful for reading layout from the DOM and then doing synchronous re-render
    if (count === 0) {
      setCount(10 + Math.random() * 200);
    }
  }, [count]);

  return (
    <div>
      <h2>useEffect vs useLayoutEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <div>
        <p>Key differences:</p>
        <ul>
          <li>useEffect runs asynchronously after render is committed to the screen</li>
          <li>useLayoutEffect runs synchronously immediately after DOM mutations, before the browser paints</li>
          <li>useLayoutEffect can block visual updates, so use it cautiously</li>
          <li>useEffect is preferred for most cases to avoid blocking visual updates</li>
          <li>useLayoutEffect is useful when you need to make DOM measurements and then update state based on that</li>
        </ul>
      </div>
    </div>
  );
};

export default UseEffectVsUseLayoutEffect;
