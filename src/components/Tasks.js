import Task from "./Task";

const Tasks = ({ tasks, onUpdate, onToggle, onDelete }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onUpdate={onUpdate}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
