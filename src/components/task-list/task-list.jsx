import PropTypes from 'prop-types'

import Task from '../task/task'
import './task-list.css'

const TaskList = ({ tasks, onCompleted, onDelete, onEdit, onEnterEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li className={task.class} key={task.id}>
          <Task task={task} onCompleted={onCompleted} onDelete={onDelete} onEdit={onEdit} />
          <input
            type="text"
            className="edit"
            placeholder="Editing Task"
            defaultValue={task.value}
            onKeyUp={(e) => onEnterEdit(e, task.id)}
          />
        </li>
      ))}
    </ul>
  )
}

TaskList.defaultProps = {
  tasks: [],
  onCompleted: () => {},
  onDelete: () => {},
  onEdit: () => {},
  onEnterEdit: () => {},
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onCompleted: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onEnterEdit: PropTypes.func.isRequired,
}

export default TaskList
