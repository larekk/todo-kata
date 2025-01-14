import './new-task-form.css'
import PropTypes from 'prop-types'

const NewTaskForm = ({ onCreateItem }) => {
  return (
    <form className="new-todo-form" onSubmit={(e) => onCreateItem(e)}>
      <input className="new-todo" name={'task-name'} placeholder="Task" autoFocus />
      <input className="new-todo-form__timer" name={'minutes'} placeholder="Min" autoFocus />
      <input className="new-todo-form__timer" name={'seconds'} placeholder="Sec" autoFocus />
      <input type={'submit'} className={'new-todo-form__submit'}></input>
    </form>
  )
}

NewTaskForm.defaultProps = {
  onCreateItem: () => {},
}

NewTaskForm.propTypes = {
  onCreateItem: PropTypes.func,
}

export default NewTaskForm
