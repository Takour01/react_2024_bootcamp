import React from "react";

const Slide1 = () => {
  return (
    <>
      <section>
        <h2>JSX Fundamentals: Writing HTML in JavaScript</h2>
        <p>
          Now that you have your environment set up, let's dive into JSX
          fundamentals.
        </p>
        <ul>
          <li>What is JSX?</li>
          <li>Why use JSX?</li>
          <li>JSX syntax rules</li>
          <li>Embedding JSX expressions</li>
        </ul>
      </section>

      <section>
        <h2>What is JSX?</h2>
        <p>
          JSX is a syntax extension for JavaScript that allows you to write
          HTML-like code within JavaScript.
        </p>
      </section>

      <section>
        <h2>Why use JSX?</h2>
        <p>
          JSX makes your React code more concise, readable, and maintainable by
          combining HTML structure with JavaScript logic.
        </p>
      </section>

      <section>
        <h2>JSX Syntax Rules</h2>
        <ul>
          <li>JSX elements must have a single root element.</li>
          <li>HTML tags are written as lowercase.</li>
          <li>JavaScript expressions are enclosed in curly braces.</li>
        </ul>
      </section>

      <section>
        <h2>Embedding JSX Expressions</h2>
        <p>
          JSX allows embedding JavaScript expressions within curly braces,
          allowing dynamic content rendering.
        </p>
        <pre>
          <code className="jsx">
            {`
import React from 'react'; 
const name = 'John Doe';
const element = <h2>Hello, {name}!</h2>;
 ReactDOM.render( element,
document.getElementById('root') );

            `}
          </code>
        </pre>
      </section>
    </>
  );
};

export default Slide1;
