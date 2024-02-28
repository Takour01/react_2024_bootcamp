import ProjectsItem from "./ProjectsItem";
import "./projects.scss";

import useViewModel from "./ProjectsVM";

const Projects = () => {
  const { projects } = useViewModel();

  return (
    <section className="flex flex-col  gap-[80px] p-12 pt-20 bg-white my-container text-primary">
      <h2 className="text-5xl font-normal text-center md:text-6xl">
        <span className="text-secondary">Project</span> You will Build
      </h2>
      <div className="flex flex-wrap justify-around w-full gap-6 px-6">
        {projects.map((project, index) => {
          return <ProjectsItem key={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
