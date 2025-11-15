import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  //Agregamos useState para guardar los cambios del formulario
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  //Agregamos acceso al dispatch de Redux
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
