import Playground from "@/views/components/Playground/Playground";
import { Link } from "@tanstack/react-router";
import Slides from "@/views/components/Slides/Slides";
import React, { useState } from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import Slide1 from "./Slides/Slide1";
import { themes } from "prism-react-renderer";
const Events = () => {
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
     <input type="number" value={hlib} onChange={(e)=> setHlib(e.target.value) } />
     <div className="grid w-32 h-32 mt-6 bg-blue-300 place-content-center"  onMouseOver={()=>setHlib(0)} >
     Hover to reset
     </div>
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
      <h2 className="px-12 pt-12 text-4xl text-white"> Live Example</h2>
      <section className="p-12 min-h-[80vh] flex w-full gap-6">
        <div className="w-1/2 h-[80vh] rounded-lg">
          <Playground code={value} handleChange={handleChange} />
        </div>
        <div className="flex w-1/2">
          <LiveProvider scope={{ Events }} code={value} theme={themes.dracula}>
            <div className="w-full bg-white">
              <LivePreview />
              <LiveError />
            </div>
          </LiveProvider>
        </div>
      </section>
      <section className="flex justify-between w-full p-12 ">
        <Link to="/props" className="text-2xl text-white ">
          {"<"} PREV
        </Link>
        <Link to="/conditional" className="text-2xl text-white ">
          NEXT {">"}
        </Link>
      </section>
    </>
  );
};

export default Events;
