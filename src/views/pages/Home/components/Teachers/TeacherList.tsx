import { CarouselContent } from "@/components/ui/carousel";
import TeacherCard from "./TeacherCard";

const TeacherList = () => {
  return (
    <CarouselContent className="">
      {Array.from({ length: 1 }).map((_, index) => (
        <TeacherCard index={index} />
      ))}
    </CarouselContent>
  );
};

export default TeacherList;
