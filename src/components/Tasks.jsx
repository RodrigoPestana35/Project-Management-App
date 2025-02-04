import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks, projectId }) {
  const tasksFiltered = tasks.filter((task) => task.projectId === projectId);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasksFiltered.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasksFiltered.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-200">
          {tasks.map((task) => {
            if (task.projectId === projectId) {
              return (
                <li
                  key={task.id}
                  className="flex items-center justify-between my-4"
                >
                  <span>{task.text}</span>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    CLear
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
