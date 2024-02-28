import { ScrollArea } from "@/components/ui/scroll-area";
import AgendaItem from "./AgendaItem";
import useViewModel from "./AgendaVM";

const RightAgenda = () => {
  const { lessons } = useViewModel();

  return (
    <article className="agenda__right">
      <ScrollArea className="w-full h-full max-h-[70vh] p-4 border-[3px] rounded-md border-primary shadow-md">
        {lessons.map((lesson, index) => {
          return (
            <AgendaItem
              color={index % 2 === 0 ? "primary" : "secondary"}
              {...lesson}
              index={index}
            />
          );
        })}
      </ScrollArea>
    </article>
  );
};

export default RightAgenda;
