import './task.css';

const Task = ({tasks}) => {

    const tasksArr = tasks.map((task) => {
        if (task.class === 'editing') {
            return (
                <li className={task.class} key={task.id}>
                    <div className='view'>
                        <input className='toggle' type='checkbox'/>
                        <label>
                            <span className='description'>{task.text}</span>
                            <span className='created'>{task.createTime}</span>
                        </label>
                        <button className='icon icon-edit'></button>
                        <button className='icon icon-destroy'></button>
                    </div>
                    <input type="text" className="edit" value="Editing task"/>
                </li>
            )
        }
        return (
            <li className={task.class} key={task.id}>
                <div className='view'>
                    <input className='toggle' type='checkbox'/>
                    <label>
                        <span className='description'>{task.text}</span>
                        <span className='created'>{task.createTime}</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy'></button>
                </div>
            </li>
        )
    })



    return (
        [ tasksArr ]
    );
};

export default Task;