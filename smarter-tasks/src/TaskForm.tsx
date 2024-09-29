import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}
interface TaskFormState {
    title:string,
    todoDueDate:string,
    todoDescription:string
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      todoDueDate:"",
      todoDescription:"",
    }
  }
  addTask: React.FormEventHandler<HTMLFormElement>=(event)=>{
    event.preventDefault();
    const newTask = {
        title: this.state.title,
        todoDueDate: this.state.todoDueDate,
        todoDescription: this.state.todoDescription
      };
      this.props.addTask(newTask);
      this.setState({ title: "",
        todoDueDate:"",
        todoDescription:""
       });
  }
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };
  todoDueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ todoDueDate: event.target.value });
  };
  todoDescriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ todoDescription: event.target.value });
  };
  render(){
    return (
      <div> <form onSubmit={this.addTask}>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-2/3" id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} required/>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-1/2" id="todoDueDate" type="date" value={this.state.todoDueDate} onChange={this.todoDueDateChanged} required/>
      <input className="flex p-2 border-emerald-400 border my-2 rounded-md w-full" id="todoDescription" type="text" value={this.state.todoDescription} onChange={this.todoDescriptionChanged} required/>
        <button className="px-2 border-emerald-400 border my-2 rounded bg-green-500 hover:bg-green-600 justify-center" id="addTaskButton" type="submit">Add item</button>
    </form></div>
    )
  }
}
 export default TaskForm;