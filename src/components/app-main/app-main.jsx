import TaskList from "../task-list/task-list";
import './app-main.css';

const AppMain = ({tasks}) => {
    return (
        <section className="main">
            <TaskList tasks={tasks} />
        </section>
    )
}

export default AppMain;