export default function NewTask({handleAddTask}) {
    const [enteredTask , setEnteredTask]  = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        handleAddTask(enteredTask)
        setEnteredTask('')
    }

    return (
        <div className="flex items-cnenter gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask}/>
            <button className="text-stone-700 hover:text-stone-950" oncClick={handleClick}>Add Task</button>
        </div>
    )
}