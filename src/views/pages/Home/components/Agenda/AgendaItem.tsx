import { Separator } from "@/components/ui/separator";

interface agendaitemProps {
  color: "primary" | "secondary";
  title: string;
  date: string;
  index: number;
}
const AgendaItem = ({ color, date, title, index }: agendaitemProps) => {
  return (
    <div
      className={`w-full h-20 bg-white text-${color === "primary" ? "secondary" : "white"} mb-2 flex gap-1.5 border-secondary border-2`}
    >
      <div className="grid w-12 h-full text-white bg-secondary place-content-center">
        <div className="w-full h-full rotate-90">Day {index + 1}</div>
      </div>
      <div
        className={`flex items-center gap-3 bg-${color === "primary" ? "white" : color} flex-grow p-2`}
      >
        <p className="text-xl">{date}</p>
        <Separator
          orientation="vertical"
          className={`w-0.5 h-2/3 bg-${color === "primary" ? "secondary" : "white"} `}
        />
        <p className="lg">{title}</p>
      </div>
    </div>
  );
};

export default AgendaItem;
