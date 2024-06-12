import TaskContext from '../../context/TaskContext'
import ListItem from '../ListItem'
import TaskItem from '../TaskItem'
import './index.css'

const Home = () => (
  <TaskContext.Consumer>
    {value => {
      const {
        taskList,
        optionsList,
        changeOption,
        addTask,
        takeTask,
        task,
        activeValue,
      } = value

      const onchangeOption = event => {
        changeOption(event.target.value)
      }

      const onAddTask = event => {
        event.preventDefault()
        addTask()
      }

      const onTakeTask = event => {
        takeTask(event.target.value)
      }

      return (
        <div className="home-con">
          <div className="part-1">
            <form className="form-con" onSubmit={onAddTask}>
              <h1 className="heading"> Create a Task! </h1>
              <div className="input-con">
                <label htmlFor="task"> Task </label>
                <input
                  value={task}
                  type="text"
                  className="input"
                  id="task"
                  onChange={onTakeTask}
                  placeholder="Enter the task here"
                />
              </div>
              <div className="input-con">
                <label htmlFor="tags"> Tags </label>
                <select
                  value={activeValue}
                  id="tags"
                  onChange={onchangeOption}
                  className="input"
                >
                  {optionsList.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      key={eachOption.optionId}
                    >
                      {' '}
                      {eachOption.displayText}{' '}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="form-btn">
                {' '}
                Add Task{' '}
              </button>
            </form>
          </div>
          <div className="part-2">
            <h1> Tags </h1>
            <ul className="tags-con">
              {optionsList.map(eachOption => (
                <ListItem details={eachOption} key={eachOption.optionId} />
              ))}
            </ul>
            <h1> Tasks </h1>
            {taskList.length === 0 ? (
              <div className="extra-con">
                <p> No Tasks Added Yet </p>
              </div>
            ) : (
              <ul className="task-con">
                {taskList.map(eachTask => (
                  <TaskItem details={eachTask} key={eachTask.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      )
    }}
  </TaskContext.Consumer>
)

export default Home
