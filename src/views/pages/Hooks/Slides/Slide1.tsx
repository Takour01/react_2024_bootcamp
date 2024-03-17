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
        <h2>Rules of Hooks</h2>
        <p>React hooks have rules to follow:</p>
        <ul>
          <li>
            Only call hooks at the top level of your functional component, not
            inside loops, conditions, or nested functions.
          </li>
          <li>
            Only call hooks from React function components or custom hooks.
          </li>
        </ul>
      </section>

      <section>
        <h2>useState Hook</h2>
        <p>Manages state in functional components.</p>
        <Code lines>{`const [state, setState] = useState(initialState);
          // Example usage
          const [count, setCount] = useState(0);`}</Code>
      </section>

      <section>
        <h2>useEffect Hook</h2>
        <p>
          Performs side effects in functional components, similar to
          componentDidMount and componentDidUpdate.
        </p>
        <Code lines>
          {`useEffect(() => {
            // Side effect logic
          }, [dependencies]);`}
        </Code>
      </section>

      <section>
        <h2>useRef Hook</h2>
        <p>
          Creates a mutable ref object to store values that persist across
          renders.
        </p>
        <Code lines>{`const refContainer = useRef(initialValue);
          // Example usage
          const inputRef = useRef(null);`}</Code>
      </section>

      <section>
        <h2>useContext Hook</h2>
        <p>
          Provides a way to pass data through the component tree without having
          to pass props down manually at every level.
        </p>
        <Code lines>{`const value = useContext(MyContext);`}</Code>
      </section>

      <section>
        <h2>useLayoutEffect Hook</h2>
        <p>
          Similar to useEffect, but fires synchronously after all DOM mutations.
        </p>
        <Code lines>
          {`useLayoutEffect(() => {
            // Side effect logic
          }, [dependencies]);`}
        </Code>
      </section>

      <section>
        <h2>useMemo Hook</h2>
        <p>
          Memoizes expensive calculations so that they are only recomputed when
          their dependencies change.
        </p>
        <Code lines>
          {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        </Code>
      </section>

      <section>
        <h2>useCallback Hook</h2>
        <p>
          Memoizes callback functions so that they are only recreated when their
          dependencies change.
        </p>
        <Code lines>
          {`const memoizedCallback = useCallback(() => {
            // Callback logic
          }, [dependencies]);`}
        </Code>
      </section>

      <section>
        <h2>Custom Hooks</h2>
        <p>
          You can create custom hooks to reuse stateful logic across different
          components.
        </p>
        <Code lines>{`function useCustomHook(initialValue) {
            const [value, setValue] = useState(initialValue);
            // Additional logic
            return [value, setValue];
          }
          // Example usage
          const [customValue, setCustomValue] = useCustomHook(0);`}</Code>
      </section>
    </>
  );
};

export default Slide1;
