import TaskContext from '../../context/TaskContext'
import './index.css'

const ListItem = props => (
  <TaskContext.Consumer>
    {value => {
      const {activeOption, buttonClicked} = value
      const {details} = props
      const {optionId, displayText} = details

      const onButtonClicked = () => {
        buttonClicked(optionId)
      }

      return (
        <li>
          <button
            type="button"
            className={activeOption === optionId ? 'active' : 'inactive'}
            onClick={onButtonClicked}
          >
            {' '}
            {displayText}{' '}
          </button>
        </li>
      )
    }}
  </TaskContext.Consumer>
)

export default ListItem
