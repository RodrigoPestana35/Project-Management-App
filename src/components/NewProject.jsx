import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const modal = useRef();

    function handleSave(){
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        //validation
        if(title.trim() === '' || description.trim() === '' || dueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: title,
            description: description,
            dueDate: dueDate
        })
    }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[32rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" isTextArea={true} />
        <Input type='date' ref={dueDateRef} label="Due Date" />
      </div>
    </div>
    </>
  );
}
