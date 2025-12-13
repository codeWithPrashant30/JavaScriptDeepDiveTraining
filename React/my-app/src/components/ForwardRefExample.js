import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// Child component using forwardRef
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    setValue: (value) => {
      inputRef.current.value = value;
    }
  }));

  return <input ref={inputRef} {...props} />;
});

// Parent component
const ForwardRefExample = () => {
  const fancyInputRef = useRef();

  const handleClick = () => {
    fancyInputRef.current.focus();
    fancyInputRef.current.setValue('Hello from parent!');
  };

  return (
    <div>
      <h2>forwardRef Example</h2>
      <FancyInput ref={fancyInputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Focus and Set Value</button>
      <div>
        <p>In this example:</p>
        <ul>
          <li>FancyInput is a child component that uses forwardRef to receive a ref from its parent</li>
          <li>useImperativeHandle customizes the instance value exposed to the parent component</li>
          <li>The parent component can now control the input's focus and value using the forwarded ref</li>
          <li>forwardRef is useful when you need to pass refs through multiple levels of components</li>
          <li>It's commonly used with HOCs and for exposing imperative methods of child components to parents</li>
        </ul>
      </div>
    </div>
  );
};

export default ForwardRefExample;
