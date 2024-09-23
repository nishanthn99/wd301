import './TaskCard.css'

interface TaskCard {
  title: string
  assigneeName: string
}

class Card implements TaskCard {
  title: string
  assigneeName: string
  dueDate: string
  completedAtDate:string

  constructor(title:string, assigneeName:string, dueDate: string,completedAtDate:string){
      this.title = title
      this.assigneeName = assigneeName
      this.dueDate = dueDate
      this.completedAtDate = completedAtDate
  }
}


const TaskCard = ({title,dueDate,assigneeName,completedAtDate}) => {
  const pending=new Card(title,assigneeName,dueDate,completedAtDate);
  return (
    <div className='task-card p-4'>
      <h2 className="text-xl font-bold">{pending.title}</h2>
      <p>{pending.dueDate}</p>
      <p>{pending.completedAtDate}</p>
      <p>assigneeName:{pending.assigneeName}</p>

    </div>
  )
}

export default TaskCard