import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide animate>
        <h2>Setting Up Your Development Environment for React</h2>
        <p>
          Let's get started with setting up your development environment for
          React.
        </p>

        <h3>1.Update </h3>
        <pre>
          <code className="bash">sudo apt-get update</code>
        </pre>
      </Slide>
      <Slide animate>
        <h2>Setting Up Your Development Environment for React</h2>
        <p>
          Let's get started with setting up your development environment for
          React.
        </p>

        <h3>2.Install Node.js and npm:</h3>
        <pre>
          <code className="bash">sudo apt install nodejs</code>
        </pre>
        <pre>
          <code className="bash">sudo apt install npm</code>
        </pre>
      </Slide>
      <Slide animate>
        <h2>Setting Up Your Development Environment for React</h2>
        <p>
          Let's get started with setting up your development environment for
          React.
        </p>

        <h3>3.Initialize a new React project:</h3>
        <pre>
          <code className="bash">npx create-react-app my-react-app</code>
        </pre>
        <h3>4.fExplore project structure and configuration.</h3>
      </Slide>
    </>
  );
};

export default Slide1;
