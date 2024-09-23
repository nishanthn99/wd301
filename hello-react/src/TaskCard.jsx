import './TaskCard.css'

const TaskCard = ({title,dueDate,assigneeName,completedAtDate}) => {
  return (
    <div className='task-card p-4'>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{dueDate}</p>
      <p>{completedAtDate}</p>
      <p>assigneeName:{assigneeName}</p>

    </div>
  )
}

export default TaskCard