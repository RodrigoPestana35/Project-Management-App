import { useState, useRef } from "react";
import TaskListItem from "./TaskListItem";

export default function ProjectPage({ project }) {
  const [tasks, setTasks] = useState([]);
  const newTask = useRef();

  function handleAddTask() {
    console.log(newTask.current.value);
    if(newTask.current.value === "") return;
    setTasks([...tasks, newTask.current.value]);
    newTask.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        {project.title}
      </h1>
      <p className="text-stone-400 mb-4">{project.dueDate}</p>
      <p className="mt-8">{project.description}</p>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input ref={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={handleAddTask} className="text-stone-800 hover:text-stone-950">Add Task</button>
      </div>
      <p className="text-stone-800 my-4">
        {(tasks.length > 0) && (
          <ul className="p-4 mt-8 rounded-md bg-stone-200">
            {tasks.map((task, index) => (
              <TaskListItem key={index} task={task} />
            ))}
          </ul>
        )}
      </p>
    </div>
  );
}
