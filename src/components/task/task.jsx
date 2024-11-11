import './task.css';
import {formatDistanceToNowStrict} from "date-fns";
import {useState} from "react";
import PropTypes from "prop-types";

const Task = ({task, onCompleted, onDelete, onEdit}) => {

    const [time, setTime] = useState(formatDistanceToNowStrict(task.createTime));
    setInterval(() => setTime(formatDistanceToNowStrict(task.createTime)), 5000);

        return (
            <div className='view'>
                <input className='toggle' type='checkbox' checked={task.checked} onChange={onCompleted.bind(null ,task.id)}/>
                <label>
                    <span className='description'>{task.value}</span>
                    <span className='created'>created {time} ago</span>
                </label>
                <button className='icon icon-edit' onClick={e => onEdit(e, task.id)}></button>
                <button className='icon icon-destroy'
                        onClick={onDelete.bind(null, task.id)}>
                </button>
            </div>
        )
};

Task.defaultProps = {
    task: [],
    onCompleted: () => {},
    onDelete: () => {},
    onEdit: () => {},
}

Task.propTypes = {
    tasks: PropTypes.array,
    onCompleted: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Task;