import { htmlImage } from "@/assets/images";
import Code from "@/views/components/Code/Code";
import Slide from "@/views/components/Slide/Slide";
import React from "react";

const Slide1 = () => {
  return (
    <>
      <Slide animate id={"slide-1"}>
        <h2>We start with HTML</h2>
      </Slide>
      <Slide animate id={"slide-1"}>
        <h2>We start with HTML</h2>
        <Code id={"code"}>
          {`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Html</title>
  </head>
  <body>
    <h1>Hlib</h1>
    <img src="./hlib.jpeg" alt="hlib" />
    <span></span>
    <button class="btn1">Tchri</button>
    <button class="btn2">Lala</button>
  </body>
</html>
 `}
        </Code>
      </Slide>
      <Slide animate id={"slide-2"}>
        <div>
          <h2>It will looked like this </h2>
        </div>
      </Slide>
      <Slide animate id={"slide-2"}>
        <div>
          <h2>It will looked like this </h2>
          <img src={htmlImage} alt="html" />
        </div>
      </Slide>
    </>
  );
};

export default Slide1;
