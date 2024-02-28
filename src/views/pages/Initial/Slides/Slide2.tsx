import { cssImage } from "@/assets/images";
import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";

const Slide2 = () => {
  return (
    <>
      <Slide animate id={"slide-3"}>
        <h2>Then we Add Some Styling with Css</h2>
      </Slide>
      <Slide animate id={"slide-3"}>
        <h2>Then we Add Some Styling with Css</h2>
        <Code id={"code"}>
          {`
  body {
        padding-left: 100px;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
      }
      h1 {
        color: red;
      }
      img {
        border: 2px solid red;
      }
      button {
        background: transparent;
        padding: 1em 3em;
        border-radius: 10px;
        font-size: 1.1rem;
        margin-top: 10px;
        color: white;
      }
      .btn1 {
        background: green;
      }
      .btn2 {
        background: red;
      }
 `}
        </Code>
      </Slide>
      <Slide animate id={"slide-4"}>
        <div>
          <h2>It Will look like this </h2>
        </div>
      </Slide>
      <Slide animate id={"slide-4"}>
        <div>
          <h2>It Will look like this </h2>
          <img src={cssImage} alt="html" />
        </div>
      </Slide>
    </>
  );
};

export default Slide2;
