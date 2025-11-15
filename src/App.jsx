import React from "react";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  //Acceso al estado mediante useSelector
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div>
      <h1>React Redux Toolkit</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
