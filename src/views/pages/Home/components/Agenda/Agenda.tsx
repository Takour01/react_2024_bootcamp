import { reactLeftIcon } from "@/assets/icons";
import RightAgenda from "./RightAgenda";
import "./agenda.scss";

const Agenda = () => {
  return (
    <section className="agenda my-container">
      <article className="agenda__left">
        <h2 className="z-10 text-5xl lg:text-6xl text-primary">
          React.js Bootcamp <span className="text-secondary">Agenda</span>
        </h2>
        <h4 className="z-10 text-lg md:text-xl">
          Learn React With GDSC UMBB one of the best library for building user
          interfaces
        </h4>
        <p className="z-10 text-xs md:text-sm md:w-3/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galleyLorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </article>
      <RightAgenda />
      <img
        src={reactLeftIcon}
        alt="react"
        className="absolute left-0 -bottom-[20%]"
      />
    </section>
  );
};

export default Agenda;
