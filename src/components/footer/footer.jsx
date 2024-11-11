import propTypes from 'prop-types'

import TaskFilter from '../task-filter/tasks-filter'
import './footer.css'

const Footer = ({ tasks, onActiveTasks, onAllTasks, onCompleteTasks, onClearCompleteItems }) => {
  const leftItems = tasks.filter((task) => task.class.split(' ')[0] === 'active')

  return (
    <footer className="footer">
      <span className="todo-count">{leftItems.length} items left</span>
      <TaskFilter
        tasks={tasks}
        onActiveTasks={onActiveTasks}
        onAllTasks={onAllTasks}
        onCompleteTasks={onCompleteTasks}
      />
      <button className="clear-completed" onClick={onClearCompleteItems}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  tasks: [],
  onActiveTasks: () => {},
  onAllTasks: () => {},
  onCompleteTasks: () => {},
  onClearCompleteItems: () => {},
}

Footer.propTypes = {
  tasks: propTypes.array.isRequired,
  onActiveTasks: propTypes.func.isRequired,
  onAllTasks: propTypes.func.isRequired,
  onCompleteTasks: propTypes.func.isRequired,
  onClearCompleteItems: propTypes.func.isRequired,
}

export default Footer
