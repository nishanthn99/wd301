import React from 'react'
import Task from './Task'
import { TaskItem } from './types';

interface Props {
    tasks: TaskItem[];
}

interface State {
  
}
class TaskList extends React.Component<Props,State>{
    render(){
        return(
            <div>
                {this.props.tasks.map((task,index)=>(
                    <Task key={index} title={task.title} description={task.todoDescription} todoDueDate={task.todoDueDate} />
                ))}
            </div>
        )
    }
}

export default TaskList;