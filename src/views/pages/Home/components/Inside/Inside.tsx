import { reactRightIcon } from "@/assets/icons";
import InsideDowner from "./InsideDowner";
import "./inside.scss";
import { Boxes } from "@/views/components/Boxes/Boxes";
const Inside = () => {
  return (
    <section className="relative flex items-center p-6 pt-10 overflow-hidden lg:p-12 md:p-8 my-container">
      <Boxes />
      <article className="z-10 flex flex-col w-full gap-6 text-white">
        <h2 className="z-10 text-5xl text-white lg:text-6xl">What's Inside</h2>
        <h4 className="z-10 text-lg md:text-xl">
          You will learn in this bootcamp{" "}
        </h4>
        <InsideDowner />
      </article>
      <img
        src={reactRightIcon}
        alt="react icon"
        className="absolute top-0 right-0"
      />
    </section>
  );
};

export default Inside;
