import TaskCard from "./TaskCard.tsx"
function App() {
  // The props dueDate, completedAtDate and assigneeName that are passed 
  // from the App component and to the TaskCard component should 
  // be defined through a TypeScript interface.

  interface List{
    title: string,
    dueDate:string,
    assigneeName:string,
    completedAtDate:string
  }

  return (
    <>
    <h1 className="font-bold justify-center flex text-2xl">Pending</h1>
    <TaskCard title={"Build the website with static content"}dueDate={"Due on:12/04/2024"}assigneeName={"Nishanth"}/>
    <TaskCard title={"Build the website with dynamic content"}dueDate={"Due on:06/04/2024"}assigneeName={"Nishanth S"}/>
    <h1 className="font-bold justify-center flex text-2xl">Done</h1>
    <TaskCard title={"Build the website with  content"} completedAtDate={"Completed on:01/04/2024"} assigneeName={"Nishanth A"}/>
    <TaskCard title={"Build the website with unknown content"}completedAtDate={"Completed on:01/04/2024"}assigneeName={"Nishanth B"}/>
     </> 
  )
}

export default App
