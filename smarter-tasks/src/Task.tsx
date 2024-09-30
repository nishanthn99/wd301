import './TaskCard.css'
interface TaskProp {
  title: string;
  todoDueDate: string;
  description: string;
}

const Task = (props: TaskProp) => {
  return (<div className="TaskItem shadow-md border border-slate-100">
    <h3 className="text-base font-bold my-1">{props.title}({props.todoDueDate})</h3>
    <p className="text-sm text-slate-500">
      {props.description}
    </p>
  </div>);
}
export default Task