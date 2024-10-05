import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    id:number,
    title:string,
    todoDueDate:string,
    todoDescription:string
}

const TaskForm=(props:TaskFormProps)=>{
  const [formState,setFormState]=React.useState<TaskFormState>({
    id:1,
    title:"",
    todoDueDate:"",
    todoDescription:""
  })

  const titleChanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    setFormState({...formState,title:event.target.value});
  }
  const todoDueDateChanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    setFormState({...formState,todoDueDate:event.target.value});
  }
  const todoDescriptionChanged:React.ChangeEventHandler<HTMLInputElement>=(event)=>{
    setFormState({...formState,todoDescription:event.target.value});
  }
  const addTask:React.FormEventHandler<HTMLFormElement>=(event)=>{
    event.preventDefault();
    console.log(`Doc is submitted with ${formState}`);
    props.addTask(formState);
    setFormState({id:formState.id+1 ,title:"",todoDueDate:"",todoDescription:""});
  }
    return (
      <div> <form onSubmit={addTask}>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-2/3" id="todoTitle" type="text" value={formState.title} onChange={titleChanged} required/>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-1/2" id="todoDueDate" type="date" value={formState.todoDueDate} onChange={todoDueDateChanged} required/>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-full" id="todoDescription" type="text" value={formState.todoDescription} onChange={todoDescriptionChanged} required/>
        <button className="px-2 border-emerald-400 border my-2 rounded bg-green-500 hover:bg-green-600 justify-center" id="addTaskButton" type="submit">Add item</button>
    </form></div>
    )
}
 export default TaskForm;