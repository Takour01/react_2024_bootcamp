import Code from "@/views/components/Code/Code";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <section>
        <h1>Component Lifecycle Methods</h1>
        <p>Understanding React Component Lifecycle in Functional Components</p>
      </section>

      <section>
        <h2>Mounting Phase</h2>
        <p>These methods are called when a functional component is mounted:</p>
        <ul>
          <li>
            <Code lines>
              {`useEffect(() => 
              { /* componentDidMount logic */ }
              , [])
              `}
            </Code>
          </li>
        </ul>
      </section>

      <section>
        <h2>Updating Phase</h2>
        <p>These methods are called when a functional component is updated:</p>
        <ul>
          <li>
            <Code lines>
              {`
            useEffect(() => 
            { /* componentDidUpdate logic 
          */}
            )
              `}
            </Code>
          </li>
        </ul>
      </section>

      <section>
        <h2>Unmounting Phase</h2>
        <p>This method is called when a functional component is unmounted:</p>
        <ul>
          <li>
            <Code>
              {`useEffect(() => 
              { return () => { /* componentWillUnmount logic 
            */} })
              `}
            </Code>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Slide1;
