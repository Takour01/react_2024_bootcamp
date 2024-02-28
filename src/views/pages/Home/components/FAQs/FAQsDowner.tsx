import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useViewModel from "./FAQsVM";
const FAQsDowner = () => {
  const { faqs } = useViewModel();
  return (
    <Accordion type="multiple" className="faq__downer">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            value={"item-" + faq.quest + index}
            key={index}
            className="faq__downer__item"
          >
            <AccordionTrigger className="faq__downer__trigger">
              {faq.quest}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQsDowner;
