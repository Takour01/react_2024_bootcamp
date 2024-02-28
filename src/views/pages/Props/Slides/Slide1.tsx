import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide>
        <h1>Props and State: Managing Data in React</h1>
        <p>
          Let's dive into managing data in React components using props and
          state.
        </p>
      </Slide>

      <Slide>
        <h2>What are Props?</h2>
        <p>
          Props (short for properties) are read-only data passed from parent to
          child components in React.
        </p>
      </Slide>

      <Slide>
        <h2>Using Props in React Components</h2>
        <p>
          To use props in a React component, simply access them as properties of
          the component's function or class:
        </p>
        <Code lines>
          {`
const MyComponent = (props) => {
  return <div> Hello, {props.name}</div>;
}
                  `}
        </Code>
      </Slide>

      <Slide>
        <h2>What is State?</h2>
        <p>
          State represents the mutable data managed within a component. It
          allows a component to keep track of changing data over time.
        </p>
      </Slide>

      <Slide>
        <h2>Using State in React Components</h2>
        <p>
          To use state in a React component, declare it using the useState hook
          (for functional components) or within the class constructor (for class
          components):
        </p>
        <Code lines>
          {`
import React, { useState } from 'react';

const MyComponent = () => {
    const [count, setCount] = useState(0);

    return (
    <div>
        <p> Count: {count}</p>
        <button onClick={() > setCount(count + 1)}>Increment</button>
    </div>  );
};
                  `}
        </Code>
      </Slide>
    </>
  );
};

export default Slide1;
