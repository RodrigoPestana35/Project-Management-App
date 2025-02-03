export default function TaskListItem({ task, handleDeleteTask }) {
    return (
      <li className="flex justify-between my-4">
        {task}
        <button onClick={() => handleDeleteTask(task)} className="text-stone-700 hover:text-red-500">Clear</button>
      </li>
    );
}