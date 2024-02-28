import Code from "@/views/components/Code/Code";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <section>
        <h2>Components in React: Building Blocks of UI</h2>
        <p>
          Let's explore React components, the building blocks of UI in React
          applications.
        </p>
      </section>

      <section>
        <h2>What are Components?</h2>
        <p>
          In React, components are reusable, self-contained blocks of UI
          elements that can be composed together to build complex user
          interfaces.
        </p>
      </section>

      <section>
        <h2>Functional Components vs. Class Components</h2>
        <p>In React, there are two main types of components:</p>
        <ul>
          <li>
            <strong>Functional Components:</strong> Simplest form of React
            component, written as functions.
          </li>
          <li>
            <strong>Class Components:</strong> Components written as ES6
            classes, used for more complex components with state and lifecycle
            methods.
          </li>
        </ul>
      </section>

      <section>
        <h2>Creating Your First React Component</h2>
        <p>
          Let's create a simple React component to understand the basic
          structure:
        </p>
        <Code lines>
          {`
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <2> Hello, React!</2>
      <p> This is my first React component.</p>
    </div>
  );
};

export default MyComponent;
                `}
        </Code>
      </section>
    </>
  );
};

export default Slide1;
