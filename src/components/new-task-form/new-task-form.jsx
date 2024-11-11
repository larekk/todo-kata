import "./new-task-form.css";
import PropTypes from "prop-types";

const NewTaskForm = ({onCreateItem}) => <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={(e) => onCreateItem(e)}/>;

NewTaskForm.defaultProps = {
    onCreateItem: () => {},
}

NewTaskForm.propTypes = {
    onCreateItem: PropTypes.func,
}

export default NewTaskForm;