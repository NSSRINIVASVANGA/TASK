import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskContext from './context/TaskContext'
import Home from './components/Home'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    optionsList: tagsList,
    activeOption: '',
    activeValue: tagsList[0].optionId,
    taskList: [],
    extraList: [],
    task: '',
    option: tagsList[0].displayText,
  }

  onTakeTask = value => {
    this.setState({task: value})
  }

  onChangeOption = value => {
    const obj = tagsList.filter(eachTask => eachTask.optionId === value)
    this.setState({activeValue: value, option: obj[0].displayText})
  }

  onAddTask = () => {
    const {task, option} = this.state
    const newTask = {
      id: uuidv4(),
      task,
      option,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      extraList: [...prevState.taskList, newTask],
      task: '',
      activeValue: tagsList[0].optionId,
      option: tagsList[0].displayText,
    }))
  }

  onButtonClicked = optionId => {
    const {activeOption, extraList} = this.state
    console.log(optionId)
    if (activeOption === optionId) {
      this.setState({activeOption: '', taskList: [...extraList]})
    } else {
      this.setState(prevState => ({
        taskList: prevState.extraList.filter(
          eachTask => eachTask.option.toLowerCase() === optionId.toLowerCase(),
        ),
        activeOption: optionId,
      }))
    }
  }

  render() {
    const {optionsList, activeOption} = this.state
    const {activeValue, taskList, task, option} = this.state
    return (
      <TaskContext.Provider
        value={{
          optionsList,
          activeOption,
          activeValue,
          taskList,
          task,
          option,
          addTask: this.onAddTask,
          takeTask: this.onTakeTask,
          changeOption: this.onChangeOption,
          buttonClicked: this.onButtonClicked,
        }}
      >
        <Home />
      </TaskContext.Provider>
    )
  }
}

export default App
