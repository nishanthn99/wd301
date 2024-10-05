import './TaskCard.css'
interface TaskProp {
  deleteTask: (id:number)=>void;
  id:number
  title: string;
  todoDueDate: string;
  description: string;
}

const Task = (props: TaskProp) => {
  return (<div className="TaskItem shadow-md border border-slate-100">
    <a href={`/tasks/${props.id || ""}`}>
            <h2 className="text-base font-bold my-1">{props.title}</h2>
          </a>
    <h3 className="text-base font-bold my-1">{props.todoDueDate}</h3>
    <p className="text-sm text-slate-500">
      {props.description}
    </p>
    <button
          className="deleteTaskButton"
          onClick={() => props.deleteTask(props.id)}
        >Delete</button>
  </div>);
}
export default Task