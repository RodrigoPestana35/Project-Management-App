export default function ProjectForm() {
  return (
    <form className="mt-4 text-right">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </menu>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />

      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
      <label className="text-sm font-bold uppercase text-stone-500">
        Due Date
      </label>
      <input type="date" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
    </form>
  );
}
