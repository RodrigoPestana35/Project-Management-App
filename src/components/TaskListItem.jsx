export default function TaskListItem({ task }) {
    return (
      <li className="flex justify-between my-4">
        {task}
      </li>
    );
}