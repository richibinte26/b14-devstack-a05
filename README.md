1.DevStack
2.DevStack is a simple and interactive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category, add their preferred tools to Your Stack, and manage their selections easily.

3.Features: Explore Technologies: Browse frontend, backend, database, and other development technologies with their description, category, difficulty, and rating.

Build Your Stack: Add technologies to your personal stack and see your selected tools together in one place.

Easy Stack Management: Remove individual technologies or clear the entire stack, with toast notifications for user actions.

4. Technologies Used:
React
TypeScript
Tailwind CSS
DaisyUI
Vite
React Icons
React Toastify
JSON

1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

3. What does the useState hook do, and where did you use it in this project?

useState creates and manages changing data inside a component. In this project, I used it in TechnologySection to store the selected technologies and loading status.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders. I used it to control the loading state before showing the technology data from the local JSON file.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React understand which item changed, was added, or was removed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true.

For example, I showed the empty stack message only when no technology was selected:

{selectedTechnologies.length === 0 && (
    <p>Your Stack is Empty</p>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.
A child can send information back by calling a function passed from the parent as a prop.

In this project, TechnologySection passes technology and onAdd to TechnologyCard, and the card calls onAdd(technology) when the button is clicked.
