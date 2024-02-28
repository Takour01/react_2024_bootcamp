import "./initial.scss";
import Slides from "@/views/components/Slides/Slides";
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import Playground from "@/views/components/Playground/Playground";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import useViewModel from "../../pages/Home/components/Agenda/AgendaVM";

const Initial = () => {
  const { lessonsDetails } = useViewModel();

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
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Slides>
      </section>
      <h2 className="px-12 pt-12 text-4xl text-white"> Live Example</h2>
      <section className="p-12 min-h-[80vh] flex w-full gap-6">
        <div className="w-1/2 h-[80vh] rounded-lg">
          <Playground code={value} handleChange={handleChange} />
        </div>
        <div className="flex w-1/2">
          <LiveProvider scope={{ Initial }} code={value} theme={themes.dracula}>
            <div className="w-full bg-white">
              <LivePreview />
              <LiveError />
            </div>
          </LiveProvider>
        </div>
      </section>
      <section className="flex justify-between w-full p-12 ">
        <Link to="/environment" className="text-2xl text-white ">
          NEXT {">"}{" "}
        </Link>
      </section>
    </>
  );
};

export default Initial;
