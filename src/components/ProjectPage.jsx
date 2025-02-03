import { useState } from "react";

export default function ProjectPage() {
    const [tasks, setTasks] = useState([]);
  return (
    <div className="w-[35rem] mt-16">
      <h1 className="text-3xl font-bold text-stone-600 mb-2">Project</h1>
      <p className="text-stone-400 mb-4">Data</p>
      <p className="mt-8">Descriçao</p>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"></aside>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="text-stone-800 my-4">
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          <li className="flex justify-between my-4">uma task</li>
        </ul>
      </p>
    </div>
  );
}
