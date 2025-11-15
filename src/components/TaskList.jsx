import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  //Accedemos al estado de las tareas
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((task) => (
        <div id={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
