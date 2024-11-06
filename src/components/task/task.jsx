import './task.css';

const Task = ({task, onCompleted, onDelete, onEdit}) => {

        return (
            <div className='view'>
                <input className='toggle' type='checkbox' checked={task.checked} onChange={onCompleted.bind(null ,task.id)}/>
                <label>
                    <span className='description'>{task.value}</span>
                    <span className='created'>{task.createTime}</span>
                </label>
                <button className='icon icon-edit' onClick={e => onEdit(e, task.id)}></button>
                <button className='icon icon-destroy'
                        onClick={onDelete.bind(null, task.id)}>
                </button>
            </div>
        )

};

export default Task;