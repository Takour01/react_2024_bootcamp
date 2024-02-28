import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide5 = () => {
  return (
    <>
      <Slide>
        <h1>Introduction to React: Understanding the Basics</h1>
        <p>Let's explore how React has revolutionized web development.</p>
      </Slide>

      <Slide>
        <h2>What is React?</h2>
        <p>React is a JavaScript library for building user interfaces.</p>
        <p>
          It introduces a component-based architecture, making it easy to build
          reusable and maintainable UI components.
        </p>
      </Slide>

      <Slide>
        <h2>Why Use React?</h2>
        <p>Advantages of using React:</p>
        <ul>
          <li>Declarative syntax with JSX</li>
          <li>Component reusability</li>
          <li>Virtual DOM for efficient updates</li>
          <li>Unidirectional data flow for predictable state management</li>
        </ul>
      </Slide>

      <Slide>
        <h2>React's Key Features</h2>
        <ul>
          <li>JSX: JavaScript syntax extension</li>
          <li>Components: Reusable UI building blocks</li>
          <li>State and Props: Managing component data</li>
          <li>Lifecycle Methods: Managing component lifecycle</li>
          <li>Hooks: Functional component state and side effects management</li>
          <li>Context API: Managing global state</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Code Example: Simple React Component</h2>
        <p>Below is an example of a simple React component:</p>
        <Code>
          {`
import React from 'react';

function App() {

    return (
      <div>;
        <h1>Hello, React!</h1>;
        <p>Welcome to my React application.</p>;
      </div>;
    );
}

export default App;
                `}
        </Code>
      </Slide>
    </>
  );
};

export default Slide5;
