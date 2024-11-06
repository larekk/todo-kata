import Task from "../task/task";
import './task-list.css';


const TaskList = ({tasks, onCompleted, onDelete, onEdit, onEnterEdit}) => {

    return (
        <ul className='todo-list'>
            {tasks.map(task =>
                    <li className={task.class} key={task.id} >
                        <Task task={task} onCompleted={onCompleted}
                                          onDelete={onDelete}
                                          onEdit={onEdit}
                        />
                        <input type="text" className='edit' placeholder='Editing Task' defaultValue={task.value}
                               onKeyUp={(e) => onEnterEdit(e, task.id)}/>
                    </li>
                )}
        </ul>
    )
}


export default TaskList;