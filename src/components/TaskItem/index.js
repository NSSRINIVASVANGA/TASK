import './index.css'

const TaskItem = props => {
  const {details} = props
  const {task, option} = details

  return (
    <li className="list-item">
      <p> {task} </p>
      <p className="active"> {option} </p>
    </li>
  )
}

export default TaskItem
