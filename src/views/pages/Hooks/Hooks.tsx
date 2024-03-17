import "./../JSX/jsx.scss";
import Slides from "@/views/components/Slides/Slides";
import React, { useState } from "react";
import Slide1 from "./Slides/Slide1";
import { Link } from "@tanstack/react-router";
import Playground from "@/views/components/Playground/Playground";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";

const Hooks = () => {
  const [value, setValue] = useState<string>(`
() => {
   const [hlib,setHlib] = React.useState(0)
    function chriHalibHandler(){
        setHlib(hlib + 1)
    }
    function nhaHalibHandler(){
        setHlib(hlib - 1)
    }
   return <>
 <div className="example" >       
    <h1>Hlib</h1>
    <img src={"./hlib.jpeg"} alt="hlib" />
    <span>
     {hlib}    
    </span>
    <button className="btn1" onClick={chriHalibHandler}>Tchri</button>
    <button className="btn2" onClick={nhaHalibHandler}>Lala</button>
  </div>
</>
};
`);

  const handleChange = (value?: string) => {
    setValue(value || "");
  };

  return (
    <>
      <section className=" h-[100vh] relative overflow-hidden text-center">
        <Slides>
          <Slide1 />
        </Slides>
      </section>
      <section className="p-12 min-h-[80vh] flex w-full gap-6">
        <div className="w-1/2 h-[80vh] rounded-lg">
          <Playground code={value} handleChange={handleChange} />
        </div>
        {/* <div className="flex w-1/2">
          <LiveProvider scope={{ Hooks }} code={value} theme={themes.dracula}>
            <div className="w-full bg-white">
              <LivePreview />
              <LiveError />
            </div>
          </LiveProvider>
        </div> */}
      </section>
      <section className="flex justify-between w-full p-12 ">
        <Link to="/life" className="text-2xl text-white ">
          {"<"} PREV{" "}
        </Link>
        {/* <Link to="/components" className="text-2xl text-white ">
          NEXT {">"}{" "}
        </Link> */}
      </section>
    </>
  );
};

export default Hooks;
