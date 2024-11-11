import TaskList from "../task-list/task-list";
import './app-main.css';
import PropTypes from "prop-types";

const AppMain = ({tasks, onCompleted, onDelete, onEdit, onEnterEdit}) => {
    return (
        <section className="main">
            <TaskList tasks={tasks}
                      onCompleted={onCompleted}
                      onDelete={onDelete}
                      onEdit={onEdit}
                      onEnterEdit={onEnterEdit}
            />
        </section>
    )
}

AppMain.defaultProps = {
    tasks: [],
    onCompleted: () => {},
    onDelete: () => {},
    onEdit: () => {},
    onEnterEdit: () => {},
}

AppMain.propTypes = {
    tasks: PropTypes.array,
    onCompleted: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onEnterEdit: PropTypes.func.isRequired,
}

export default AppMain;