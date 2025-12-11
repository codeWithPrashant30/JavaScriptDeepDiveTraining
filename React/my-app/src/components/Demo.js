import { useEffect, useLayoutEffect, useState } from "react";

export default function Demo() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect:", number);
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect:", number);
  });

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}
