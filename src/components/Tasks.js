import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onToggle, onEdit, statusHandler, status ,showSelect}) => {

  return (
    <>

      {showSelect ? 
      (<select
        onChange={statusHandler}
        style={{ fontSize: 16, height: 40, padding: 10, marginBottom: 10 }}
      >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">unCompleted</option>
      </select>)
      : null
}
  
      {status === "completed" && tasks.filter(task => task.status).map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
      ))}
      {status === "uncompleted" && tasks.filter(task => !task.status).map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
      ))}
      {status === "all" && tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onEdit={onEdit} onToggle={onToggle} />
      ))}
    </>
  )
}

Tasks.defaultProps = {
  showSelect: true,
}

Tasks.propTypes = {
  showSelect: PropTypes.bool,
}

export default Tasks
