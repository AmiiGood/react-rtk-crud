import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  //Agregamos useState para guardar los cambios del formulario
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  //Agregamos acceso al dispatch de Redux
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Agregamos un hook useParams para acceder a los parámetros de la url
  const params = useParams();
  //Agregamos un hook useSelector para accecer al state
  const tasks = useSelector((state) => state.tasks);

  //Agregando un useEffect para cargar los datos de la tarea a modificar
  useEffect(() => {
    if (params.id) {
      //Pasamos la tarea encontrada al estado mediante setTask
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  //Función para manejar el evento submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={task.description}
        placeholder="description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
