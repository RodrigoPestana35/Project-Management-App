import { useRef } from "react";

export default function ProjectForm({ setProjects, setCreateProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (
      titleRef.current.value &&
      descriptionRef.current.value &&
      dueDateRef.current.value
    ) {
      const title = titleRef.current.value;
      const description = descriptionRef.current.value;
      const dueDate = dueDateRef.current.value;

      setProjects((oldProjects) => {
        return [...oldProjects, { title, description, dueDate }];
      });

      titleRef.current.value = "";
      descriptionRef.current.value = "";
      dueDateRef.current.value = "";
    }
  }

  function handleCancel() {
    setCreateProject(false);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  }

  return (
    <form className="mt-4 text-right">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={handleCancel}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input
        ref={titleRef}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />

      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <input
        ref={descriptionRef}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        Due Date
      </label>
      <input
        ref={dueDateRef}
        type="date"
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </form>
  );
}
