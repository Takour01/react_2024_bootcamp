import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide>
        <h1>Conditional Rendering and Dynamic Components</h1>
        <p>
          Let's explore how to conditionally render components and create
          dynamic UIs in React.
        </p>
      </Slide>

      <Slide>
        <h2>Conditional Rendering</h2>
        <p>
          In React, you can conditionally render components using JavaScript
          expressions or ternary operators.
        </p>
        <Code>{`return (
  <div>
    {isLoggedIn ? <UserDashboard /> : <Login />}
  </div>
);`}</Code>
      </Slide>

      <Slide>
        <h2>Dynamic Components</h2>
        <p>
          Dynamic components in React allow you to render different components
          based on certain conditions or user interactions.
        </p>
        <p>
          For example, you can render different types of form inputs based on
          user selections:
        </p>
        <Code>{`return (
  <div>
    {inputType === 'text' ? <TextInput /> : <NumberInput />}
  </div>
);`}</Code>
      </Slide>

      <Slide>
        <h2>Conditional Rendering with Logical && Operator</h2>
        <p>
          The logical <code>&&</code> operator can be used for conditional
          rendering in a concise way:
        </p>
        <Code>{`return (
  <div>
    {isLoggedIn && <UserDashboard />}
  </div>
);`}</Code>
      </Slide>

      <Slide>
        <h2>Conditional Rendering with Switch Statement</h2>
        <p>For more complex conditions, you can use a switch statement:</p>
        <Code>{`switch (userRole) {
  case 'admin':
    return <AdminDashboard />;
  case 'user':
    return <UserDashboard />;
  default:
    return <DefaultDashboard />;
}`}</Code>
      </Slide>

      <Slide>
        <h2>Dynamic Component Rendering with Arrays</h2>
        <p>
          You can render dynamic lists of components by mapping over arrays:
        </p>
        <Code>{`const items = ['item1', 'item2', 'item3'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);`}</Code>
      </Slide>
    </>
  );
};

export default Slide1;
