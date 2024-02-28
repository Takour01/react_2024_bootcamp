import { Boxes } from "@/views/components/Boxes/Boxes";
import TeacherSlider from "./TeacherSlider";
import "./teachers.scss";
const Teachers = () => {
  return (
    <section className="flex flex-col  gap-[80px]  pt-20  my-container relative overflow-hidden">
      <Boxes />
      <h2 className="z-10 text-5xl text-center text-white md:text-6xl">
        Your Mentors
      </h2>
      <TeacherSlider />
    </section>
  );
};

export default Teachers;
