import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ handleAddProject  ,handleCancelAddProject }) {

    const modal = useRef();

    const title = useRef();
    const desctription = useRef();
    const dueDate = useRef();

    function handleSave() {
        const ennteredTitle = title.current.value;
        const enteredDescription = desctription.current.value
        const enteredDueDate = dueDate.current.value

        if ((!ennteredTitle || ennteredTitle.trim() === '') ||
            (!enteredDescription || enteredDescription.trim() === '') ||
            (!enteredDueDate || enteredDueDate.trim() === '')) {
                modal.current.open()
                return
        }


        handleAddProject({
            title: ennteredTitle,
            desctription: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4"> Invalid Input </h2>
            <p className="text-stone-600 mb-4">enter right Value</p>
        </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li>
                        <button className="px-6 py-2 text-stone-800  hover:text-stone-950"
                        onClick={handleCancelAddProject}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50  hover:bg-stone-950"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={desctription} label="Desctription" textarea />
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )
}