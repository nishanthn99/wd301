import Task from './Task'
import { TaskItem } from './types';

interface Props {
    tasks: TaskItem[];
    deleteTask:(id:number)=>void
}

const TaskList=(props:Props)=>{
    return(
        <div>
        {props.tasks.map((task,index)=>(
            <Task key={index} id={task.id} title={task.title} description={task.todoDescription} todoDueDate={task.todoDueDate} deleteTask={props.deleteTask}/>
        ))}
    </div> 
    )
}

export default TaskList;