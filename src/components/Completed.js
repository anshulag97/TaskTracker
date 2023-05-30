import { useState, useEffect } from "react";
import React from "react";
import Tasks from "./Tasks";

const Completed = (props) => {
  const { showFilter } = props;

  console.log("TEST@@@", showFilter);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    //This is to update the view after deleting the task in JSON
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error when deleting task.");
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);

    return data;
  };

  console.log(showFilter);

  return (
    <div>
      {/* <p>{showFilter ? "True" : "False"}</p> */}
      <h2>List of Completed</h2>
      <a href="/">Go Back</a>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks.filter((task) => task.status === true)}
          onDelete={deleteTask}
        />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
};

export default Completed;
