import { dropIcon } from "@/assets/icons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectsItemProps {
  title: string;
  index: number;
  img: any;
  subTitle: string;
  desc: string;
}

const ProjectsItem = ({
  desc,
  img,
  index,
  subTitle,
  title,
}: ProjectsItemProps) => {
  return (
    <article className="flex flex-col items-start justify-start h-full">
      <div className="flex gap-6 text-2xl text-start">
        <div className="relative">
          <div className="bg-red-400 w-[100px] absolute -top-3/4 -left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="relative w-full h-full">
              <img src={dropIcon} alt="" className="absolute w-full" />
            </div>
          </div>
          <span className="relative">{index}</span>
        </div>{" "}
        <h2>{title}</h2>
      </div>
      <CardContainer className="mt-0 ">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="100" className="w-full mt-2">
            <img
              src={img}
              className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="mt-4 text-xl font-bold text-primary dark:text-white"
          >
            {subTitle}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="max-w-sm mt-2 text-sm text-primary dark:text-primary"
          >
            {desc}
          </CardItem>
        </CardBody>
      </CardContainer>{" "}
    </article>
  );
};

export default ProjectsItem;
