import { jsImage } from "@/assets/images";
import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";

const Slide3 = () => {
  return (
    <>
      <Slide animate id={"slide-4"}>
        <h2>Than with Add some life to it with JS</h2>
      </Slide>
      <Slide animate id={"slide-4"}>
        <h2>Than with Add some life to it with JS</h2>
        <Code id={"code"}>
          {`
   const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    const span = document.querySelector("span");
    let num = 0;
    btn1.addEventListener("click", () => {
      num++;
      span.innerText = num;
    });
    btn2.addEventListener("click", () => {
      num--;
      span.innerText = num;
    });`}
        </Code>
      </Slide>
      <Slide animate id={"slide-4"}>
        <div>
          <h2>We end up with somthing like this </h2>
        </div>
      </Slide>
      <Slide animate id={"slide-4"}>
        <div>
          <h2>We end up with somthing like this </h2>
          <img src={jsImage} alt="html" />
        </div>
      </Slide>
    </>
  );
};

export default Slide3;
