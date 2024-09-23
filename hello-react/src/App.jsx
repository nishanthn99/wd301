import TaskCard from "./TaskCard"
function App() {
  return (
    <>
    <h1 className="font-bold justify-center flex text-2xl">Pending</h1>
    <TaskCard title={"Build the website with static content"}dueDate={"Due On:12/04/2024"}assigneeName={"Nishanth"}/>
    <TaskCard title={"Build the website with dynamic content"}dueDate={"Due On:06/04/2024"}assigneeName={"Nishanth S"}/>
    <h1 className="font-bold justify-center flex text-2xl">Done</h1>
    <TaskCard title={"Build the website with  content"} completedAtDate={"completed on:01/04/2024"} assigneeName={"Nishanth A"}/>
    <TaskCard title={"Build the website with unknown content"}completedAtDate={"completed on:01/04/2024"}assigneeName={"Nishanth B"}/>
     </> 
  )
}

export default App
