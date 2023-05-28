import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onEdit, statusHandler, status }) => {
  return (
    <>
      <select
        onChange={statusHandler}
        style={{ fontSize: 16, height: 40, padding: 10, marginBottom: 10 }}
      >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">unCompleted</option>
      </select>
  
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

export default Tasks
