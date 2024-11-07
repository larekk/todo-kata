import TaskFilter from "../task-filter/tasks-filter";
import './footer.css';

const Footer = ({tasks, onActiveTasks, onAllTasks, onCompleteTasks, onClearComleteItems}) => {

    const leftItems = tasks.filter(task => task.class === 'active')

    return (
        <footer className="footer">
            <span className="todo-count">{leftItems.length} items left</span>
                <TaskFilter tasks={tasks}
                            onActiveTasks={onActiveTasks}
                            onAllTasks={onAllTasks}
                            onCompleteTasks={onCompleteTasks}
                            />
            <button className="clear-completed"
                    onClick={onClearComleteItems}>Clear completed</button>
        </footer>
    )
}

export default Footer;