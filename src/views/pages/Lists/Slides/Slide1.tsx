import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide>
        <h1>Lists and Keys in React</h1>
        <p>Let's explore how to work with lists and keys in React.</p>
      </Slide>

      <Slide>
        <h2>Rendering Lists in React</h2>
        <p>
          In React, you can render lists of elements using the{" "}
          <Code>map()</Code> method.
        </p>
        <Code lines>{`const items = ['item1', 'item2', 'item3'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);`}</Code>
      </Slide>

      <Slide>
        <h2>The Importance of Keys</h2>
        <p>
          Keys are important when rendering lists in React to help identify
          which items have changed, are added, or are removed.
        </p>
        <p>
          Keys should be unique among siblings, but they don't need to be
          globally unique.
        </p>
      </Slide>

      <Slide>
        <h2>Using Index as Keys</h2>
        <p>
          While using array indexes as keys is convenient, it's not recommended
          for dynamic lists with items that can be reordered or filtered.
        </p>
        <p>
          Consider using stable IDs or unique identifiers from your data
          instead.
        </p>
      </Slide>

      <Slide>
        <h2>Adding Keys to Components</h2>
        <p>
          When rendering a list of React components, make sure to add keys to
          each component to help React identify them.
        </p>
        <Code lines>{`const items = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
  { id: 3, name: 'item3' }
];

return (
  <ul>
    {items.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);`}</Code>
      </Slide>
    </>
  );
};

export default Slide1;
