import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  //Agregamos acceso al dispatch de Redux
  const dispatch = useDispatch();

  //Accedemos al estado de las tareas
  const tasks = useSelector((state) => state.tasks);

  //Metodo para manejar el evento del click de Delete
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header>Tasks {tasks.length}</header>
      <Link to="create-task">Create Task</Link>
      {tasks.map((task) => (
        <div id={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit-task/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
