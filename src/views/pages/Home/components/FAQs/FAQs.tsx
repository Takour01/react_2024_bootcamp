import FAQsDowner from "./FAQsDowner";
import "./faqs.scss";
const FAQs = () => {
  return (
    <section className="flex flex-col  gap-[80px] p-12 pt-20 bg-white my-container text-primary">
      <h2 className="text-5xl font-normal text-center md:text-6xl">
        Frequently Asked Questions
      </h2>
      <FAQsDowner />
    </section>
  );
};

export default FAQs;
