import Task from './Task'
import { TaskItem } from './types';

interface Props {
    tasks: TaskItem[];
}

const TaskList=(props:Props)=>{
    return(
        <div>
        {props.tasks.map((task,index)=>(
            <Task key={index} title={task.title} description={task.todoDescription} todoDueDate={task.todoDueDate} />
        ))}
    </div> 
    )
}

export default TaskList;