import './task.css'
import { formatDistanceToNowStrict } from 'date-fns'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Task = ({ task, onCompleted, onDelete, onEdit }) => {
  const [time, setTime] = useState(formatDistanceToNowStrict(task.createTime))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDistanceToNowStrict(task.createTime))
    }, 5000)

    return () => clearInterval(interval)
  }, [task.createTime])

  const [minutes, setMinutes] = useState(task.valueMinutes)
  const [seconds, setSeconds] = useState(task.valueSeconds)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timerInterval

    if (isRunning) {
      timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1)
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1)
          setSeconds(59)
        } else {
          setIsRunning(false)
        }
      }, 1000)
    }

    return () => clearInterval(timerInterval)
  }, [isRunning, minutes, seconds])

  const handlePlay = () => setIsRunning(true)
  const handlePause = () => setIsRunning(false)

  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={task.checked} onChange={() => onCompleted(task.id)} />
      <label>
        <span className="title">{task.value}</span>
        <span className="description">
          <button className="icon icon-play" onClick={handlePlay}></button>
          <button className="icon icon-pause" onClick={handlePause}></button>
          {minutes}:{seconds}
        </span>
        <span className="created">created {time} ago</span>
      </label>
      <button className="icon icon-edit" onClick={(e) => onEdit(e, task.id)}></button>
      <button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
    </div>
  )
}

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

export default Task
