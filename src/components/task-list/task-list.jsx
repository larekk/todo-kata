import Task from "../task/task";
import './task-list.css';


const TaskList = ({tasks}) => {
    return (
        <ul className='todo-list'>
            <Task tasks={tasks}/>
        </ul>
    )
}

export default TaskList;