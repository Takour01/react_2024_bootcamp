import { hlibImage, umbbImage } from "@/assets/images";

interface ProjectsItemProps {
    title: string;
    index: number;
    img: any;
    subTitle: string;
    desc: string;
}

const ProjectsVM = () => {
    const projects: ProjectsItemProps[] = [
        {
            title: "Hlib Commerce",
            desc: "Building an E-Commerce website to market and sell the hlib ta3 30 DA",
            img: hlibImage,
            index: 1,
            subTitle: "Hlib Commerce"
        },
        {
            title: "Inim Website",
            desc: "Building a website for the university with all the things you wished  it had",
            img: umbbImage,
            index: 2,
            subTitle: "Inim Website"
        }

    ]

    return { projects }
}

export default ProjectsVM