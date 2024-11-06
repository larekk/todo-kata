import './task-filter.css'

const TaskFilter = ({onActiveTask}) => {
    return (
        <ul className="filters">
            <li>
                <button className='selected'>All</button>
            </li>
            <li>
                <button onClick={e => onActiveTask(e)}>Active</button>
            </li>
            <li>
                <button >Completed</button>
            </li>
        </ul>
    )
}

export default TaskFilter;