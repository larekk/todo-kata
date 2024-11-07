import TaskList from "../task-list/task-list";
import './app-main.css';

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

export default AppMain;