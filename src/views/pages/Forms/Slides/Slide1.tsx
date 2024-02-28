import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide>
        <h1>Forms and Controlled Components</h1>
        <p>
          Let's learn about handling forms and controlled components in React.
        </p>
      </Slide>

      <Slide>
        <h2>Controlled Components</h2>
        <p>
          In React, form elements whose value is controlled by React are called
          controlled components.
        </p>
        <Code>{`
const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {
    setInputValue(event.target.value);
};
               
return  <input type="text" value={inputValue} onChange={handleChange} />`}</Code>
      </Slide>

      <Slide>
        <h2>Handling Form Submission</h2>
        <p>
          To handle form submission in React, use the <code>onSubmit</code>{" "}
          event handler on the form element.
        </p>
        <Code>{`
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };

return <form onSubmit={handleSubmit}>
  <input type="text" value={inputValue} onChange={handleChange} />
  <button type="submit">Submit</button>
</form>`}</Code>
      </Slide>

      <Slide>
        <h2>Form Validation</h2>
        <p>
          Form validation in React can be done by implementing custom validation
          logic within the <code>handleSubmit</code> function.
        </p>
        <p>
          You can also use third-party libraries like Formik or Yup for more
          advanced form validation.
        </p>
      </Slide>

      <Slide>
        <h2>Controlled Components with Select and Textarea</h2>
        <p>
          Similarly, you can create controlled components with{" "}
          <Code>
            <select></select>
          </Code>{" "}
          and{" "}
          <Code>
            <textarea></textarea>
          </Code>{" "}
          elements in React.
        </p>
      </Slide>
    </>
  );
};

export default Slide1;
