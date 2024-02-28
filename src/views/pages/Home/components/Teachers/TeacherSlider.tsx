import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TeacherList from "./TeacherList";

const TeacherSlider = () => {
  return (
    <article className="flex-1 md:w-full w-[100vw]  md:px-12  ">
      <Carousel className="w-full h-full ">
        <TeacherList />
        <CarouselPrevious className="prevSlider" />
        <CarouselNext className="prevSlider" />
      </Carousel>
    </article>
  );
};

export default TeacherSlider;
