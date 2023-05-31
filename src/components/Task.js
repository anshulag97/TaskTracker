import { FaTimes, FaCheck, FaRedo } from "react-icons/fa";

const Task = ({ task, onUpdate, onToggle, onDelete }) => {
  const { text, status, id } = task;
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={(e) => onToggle(e, task.id)}>
      <h3>
        {text} {getTestIcon(id, status, onUpdate, onDelete)}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const getTestIcon = (id, status, onUpdate, onDelete) => {
  if (status === "Active" || !status) {
    return (
      <div style={{ display: "inline-block" }}>
        <FaCheck
          title="Complete"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onUpdate(id, "Complete")}></FaCheck>
        &nbsp;
        <FaTimes
          title="Delete"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(id)}></FaTimes>
      </div>
    );
  } else if (status == "Complete") {
    return (
      <div style={{ display: "inline-block" }}>
        <FaCheck
          title="Completed"
          style={{ color: "green", cursor: "auto" }}></FaCheck>{" "}
        &nbsp;
        <FaTimes
          title="Delete"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(id)}></FaTimes>
        &nbsp;
        <FaRedo
          title="Re-activate"
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => onUpdate(id, "Active")}></FaRedo>{" "}
      </div>
    );
  }
};

export default Task;
