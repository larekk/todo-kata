import './task-filter.css'
import {useState} from 'react'
import propTypes from "prop-types";

const TaskFilter = ({onActiveTasks, onAllTasks, onCompleteTasks}) => {

    const [buttonsData, setButtonsData] = useState([
        {class: 'selected', value: 'All'},
        {class: '', value: 'Active'},
        {class: '', value: 'Completed'}
    ])

    function setSelected(e) {
        return setButtonsData(state => {
            return state.map(item => {
                    if(e.target.textContent === item.value) {
                        item.class = 'selected';
                        return item;
                    } else {
                        item.class = '';
                        return item;
                    }
                })
        })
    }

    return (
        <ul className="filters">
            <li>
                <button className={buttonsData[0].class} onClick={e => {
                    onAllTasks()
                    setSelected(e)
                }}>All</button>
            </li>
            <li>
                <button className={buttonsData[1].class} onClick={e => {
                    onActiveTasks()
                    setSelected(e)
                }}>Active</button>
            </li>
            <li>
                <button className={buttonsData[2].class} onClick={e => {
                    onCompleteTasks()
                    setSelected(e)
                }}>Completed</button>
            </li>
        </ul>
    )
}

TaskFilter.defaultProps = {
    onActiveTasks: () => {},
    onAllTasks: () => {},
    onCompleteTasks: () => {},
}

TaskFilter.propTypes = {
    onActiveTasks: propTypes.func.isRequired,
    onAllTasks: propTypes.func.isRequired,
    onCompleteTasks: propTypes.func.isRequired,
}

export default TaskFilter;