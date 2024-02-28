import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useViewModel from "./InsideVM";
export default function InsideDowner() {
  const { lessons } = useViewModel();

  return (
    <Accordion type="multiple" className="inside__downer">
      {lessons.map((lesson, index) => {
        return (
          <AccordionItem
            value={"item-" + lesson.title + index}
            key={index}
            className="inside__downer__item"
          >
            <AccordionTrigger className="inside__downer__trigger">
              {lesson.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">Lessons : </p>
              <ul>
                {lesson.lessons.map((less, index) => {
                  return (
                    <li className="list-decimal" key={index}>
                      {less.title}
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
