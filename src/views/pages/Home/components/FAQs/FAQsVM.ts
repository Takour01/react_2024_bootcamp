const faqs = [
    {
        quest: "What is React?",
        answer: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. ? "
    },
    {
        quest: "What are the key features of React?",
        answer: "React features a component-based architecture, virtual DOM for efficient updates, JSX for writing HTML in JavaScript, and uni-directional data flow for managing state."
    },
    {
        quest: "Is React suitable for building large-scale applications?",
        answer: "Yes, React is suitable for building large-scale applications. Its component-based architecture promotes code reusability and maintainability, while features like the virtual DOM and state management libraries like Redux help optimize performance and manage complex application states."
    },
]

export default function FAQsVM() {


    return { faqs }
}


