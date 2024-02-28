import Slides from "@/views/components/Slides/Slides";
import Slide1 from "./Slides/Slide1";
import { Link } from "@tanstack/react-router";

const Environment = () => {
  return (
    <>
      <section className=" h-[100vh] relative overflow-hidden text-center">
        <Slides>
          <Slide1 />
        </Slides>
      </section>
      <section className="flex justify-between w-full p-12 ">
        <Link to="/initial" className="text-2xl text-white ">
          {"<"} PREV{" "}
        </Link>
        <Link to="/jsx" className="text-2xl text-white ">
          NEXT {">"}{" "}
        </Link>
      </section>
    </>
  );
};

export default Environment;
