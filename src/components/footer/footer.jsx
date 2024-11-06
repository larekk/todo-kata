import TaskFilter from "../task-filter/tasks-filter";
import './footer.css';

const Footer = ({tasks, onActiveTask}) => {

    const leftItems = tasks.filter(task => task.class === 'active')

    return (
        <footer className="footer">
            <span className="todo-count">{leftItems.length} items left</span>
                <TaskFilter tasks={tasks}
                            onActiveTask={onActiveTask}/>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default Footer;