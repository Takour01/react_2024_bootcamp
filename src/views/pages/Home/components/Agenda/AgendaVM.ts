export type Lesson = {
    title: string;
    date: string;
    subTitle: string
};




const lessons: Lesson[] = [
    { title: "Introduction to React: Understanding the Basics", date: "28/02/2024", subTitle: "Introduction to React" },
    { title: "Setting Up Your Development Environment for React", date: "15/03/2024", subTitle: "Environment for React" },
    { title: "JSX Fundamentals: Writing HTML in JavaScript", date: "21/03/2024", subTitle: "JSX Fundamentals" },
    { title: "Components in React: Building Blocks of UI", date: "02/04/2024", subTitle: "Components in React" },
    { title: "Props and State: Managing Data in React", date: "10/04/2024", subTitle: "Props and State" },
    { title: "Handling Events in React Applications", date: "18/04/2024", subTitle: "Handling Events" },
    { title: "Conditional Rendering and Dynamic Components", date: "25/04/2024", subTitle: "Conditional Rendering" },
    { title: "Lists and Keys: Rendering Dynamic Data", date: "03/05/2024", subTitle: "Lists and Keys" },
    { title: "Forms and Controlled Components in React", date: "11/05/2024", subTitle: "Forms in React" },
    { title: "Component Lifecycle Methods: Understanding React Component Lifecycle", date: "20/05/2024", subTitle: "Component Lifecycle" },
    { title: "Hooks: Stateful Logic in Functional Components", date: "28/05/2024", subTitle: "Hooks" },
    { title: "Context API: Managing Global State in React Applications", date: "05/06/2024", subTitle: "Context API" },
    { title: "React Router: Adding Routing to Single Page Applications", date: "13/06/2024", subTitle: "React Router" },
    { title: "Introduction to Redux: Managing State in Large React Applications", date: "21/06/2024", subTitle: "Introduction to Redux" },
    { title: "Best Practices and Performance Optimization in React", date: "29/06/2024", subTitle: "Best Practices and Performance" },
    { title: "Server-Side Rendering with React: Next.js", date: "07/07/2024", subTitle: "Server-Side Rendering" },
    { title: "Building Progressive Web Applications (PWAs) with React", date: "15/07/2024", subTitle: "Building PWAs" },
    { title: "React and TypeScript: Adding Typing to Your React Application", date: "23/07/2024", subTitle: "React and TypeScript" },
    { title: "Deployment Strategies for React Applications", date: "31/07/2024", subTitle: "Deployment Strategies" }
];



type LessonCollection = {
    title: string;
    lessons: Lesson[];
    date: string
};

const collections: LessonCollection[] = [
    {
        title: "Getting Started with React",
        lessons: [
            lessons[0], // Introduction to React
            lessons[1], // Setting Up Your Development Environment for React
            lessons[2]  // JSX Fundamentals
        ],
        date: "26/02/2024"
    },
    {
        title: "Understanding React Components",
        lessons: [
            lessons[3], // Components in React
            lessons[4], // Props and State
            lessons[5]  // Handling Events
        ],
        date: "28/02/2024"
    },
    {
        title: "Dynamic Rendering and Data Management",
        lessons: [
            lessons[6], // Conditional Rendering and Dynamic Components
            lessons[7], // Lists and Keys
            lessons[8]  // Forms and Controlled Components
        ],
        date: "04/03/2024"
    },
    {
        title: "Understanding React Lifecycle",
        lessons: [
            lessons[9],  // Component Lifecycle Methods
            lessons[10]  // Hooks
        ],
        date: "06/03/2024"
    },
    {
        title: "State Management in React Applications and routing",
        lessons: [
            lessons[11], // Context API
            lessons[13],  // Introduction to Redux
            lessons[12] // routing
        ],
        date: "11/03/2024"
    },
    {
        title: "Advanced React Concepts",
        lessons: [
            lessons[14], // Best Practices and Performance Optimization
            lessons[15]  // Server-Side Rendering with React
        ],
        date: "13/03/2024"
    },
    {
        title: "Building Scalable React Applications",
        lessons: [
            lessons[16], // Building Progressive Web Applications (PWAs) with React
            lessons[17]  // React and TypeScript
        ],
        date: "18/03/2024"
    },
    {
        title: "Deploying React Applications",
        lessons: [
            lessons[18] // Deployment Strategies for React Applications
        ],
        date: "20/03/2024"
    }
];








const AgendaVM = () => {
    return { lessons: collections, lessonsDetails: lessons }
}

export default AgendaVM