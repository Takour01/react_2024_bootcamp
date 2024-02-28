import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide>
        <h1>Handling Events in React</h1>
        <p>Let's learn how to handle events in React components.</p>
      </Slide>

      <Slide>
        <h2>Event Handling Syntax</h2>
        <p>
          In React, event handlers are passed as props to JSX elements using
          camelCase naming convention.
        </p>
        <p>For example:</p>
        <Code>{`const handleClick = () => {
  console.log('Button clicked!');
};

return (
  <button onClick={handleClick}>Click Me</button>
);`}</Code>
      </Slide>

      <Slide>
        <h2>Common React Events</h2>
        <ul>
          <li>onClick</li>
          <li>onChange</li>
          <li>onSubmit</li>
          <li>onMouseOver</li>
          <li>onMouseOut</li>
          <li>and many more...</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Event Parameters</h2>
        <p>
          React event handlers can accept event parameters to access additional
          information, such as event properties and target values.
        </p>
        <Code>{`const handleChange = (event) => {
  console.log('Input value:', event.target.value);
};

return (
  <input type="text" onChange={handleChange} />
);`}</Code>
      </Slide>

      <Slide>
        <h2>Preventing Default Behavior</h2>
        <p>
          In React, you can prevent the default behavior of events, such as form
          submission or link navigation, using the <code>preventDefault()</code>{" "}
          method.
        </p>
        <Code>{`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted!');
};

return (
  <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>
);`}</Code>
      </Slide>
    </>
  );
};

export default Slide1;
