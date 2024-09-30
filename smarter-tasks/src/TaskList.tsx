import Task from './Task'
import { TaskItem } from './types';

interface Props {
    tasks: TaskItem[];
}

const TaskList=(props:Props)=>{
    return(
        <div>
        <ul>
      {props.tasks.length > 0 ? (
        props.tasks.map((task,idx) => (
          <Task
            key={idx}
            title={task.title}
            todoDescription={task.todoDescription}
            todoDueDate={task.todoDueDate}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </ul>
    </div> 
    )
}

export default TaskList;