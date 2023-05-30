import { FaTimes, FaCheck } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onEdit , status}) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <div>
          <FaCheck
            style={{ cursor: 'pointer', marginRight: 10 }}
            className={`${task.status ? 'activeTask' : 'noActiveTask'}`}
            onClick={() => onEdit(task.id)}
          />
        
         {status === "completed" && <FaTimes
         style={{ color: 'red', cursor: 'pointer' }}
         onClick={() => onDelete(task.id)}
       />}
          
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
