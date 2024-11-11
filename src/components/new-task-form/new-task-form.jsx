import "./new-task-form.css";

const NewTaskForm = ({onCreateItem}) => <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={(e) => onCreateItem(e)}/>;

export default NewTaskForm;