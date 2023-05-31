import { Link } from "react-router-dom";
import Tasks from "./Tasks";
const Complete = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div>
      <span className="title">Completed Tasks</span>
      <br />
      <>
        {tasks.filter((task) => task.status === "Complete").length > 0 ? (
          <Tasks
            tasks={tasks.filter((task) => task.status === "Complete")}
            onUpdate={onUpdate}
            onToggle={() => {}}
            onDelete={onDelete}
          />
        ) : (
          "No Completed Tasks To Show"
        )}
      </>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Complete;
