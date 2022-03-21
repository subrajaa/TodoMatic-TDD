import { nanoid } from "nanoid";
import { useState } from "react";

import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';

import './App.css';

function App() {

  let DATA = [
    { id: "" + nanoid(), name: "Eat good food", completed: true },
    { id: "" + nanoid(), name: "Sleep", completed: false },
    { id: "" + nanoid(), name: "Repeat", completed: false }
  ];

  const [tasks, setTasks] = useState(DATA);

  const updateTask = (props) => {
    const newTasks = tasks.map(task => {
      if(task.id === props.id) {
        return {...task, completed: !task.completed};
      }
      setTasks(newTasks);
    })
  }

  return (
    <div className="TodoMatic">
      <AddTask />
      <AllTasks tasks={tasks} updateTask={updateTask}/>
    </div>
  );
}

export default App;
