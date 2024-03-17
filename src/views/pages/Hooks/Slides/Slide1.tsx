import Code from "@/views/components/Code/Code";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <section>
        <h1>Hooks</h1>
        <p>Stateful Logic in Functional Components</p>
      </section>
      <section>
        <h2>useState Hook</h2>
        <p>
          Allows functional components to manage state without using class
          components.
        </p>
        <p>Example:</p>
        <Code lines>{`const [count, setCount] = useState(0);`}</Code>
      </section>
      <section>
        <h2>useEffect Hook</h2>
        <p>
          Enables performing side effects in functional components. Similar to
          lifecycle methods in class components.
        </p>
        <p>Example:</p>
        <Code lines>{`useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);`}</Code>
      </section>
      <section>
        <h2>Other Hooks</h2>
        <p>
          React provides additional hooks for various purposes such as context,
          refs, and more.
        </p>
        <p>Examples:</p>
        <Code lines>{`const value = useContext(MyContext);`}</Code>

        <Code lines>{`const nodeRef = useRef(null);`}</Code>
      </section>{" "}
    </>
  );
};

export default Slide1;
