import { useState } from "react";
import NewTask from "./NewTask";

export default function Tasks({tasks, handleAddTask , handleDeleteTask ,parentTaskId }){

    const relevantTasks = tasks.filter(task => task.parentId === parentTaskId);
     return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask handleAddTask={handleAddTask} parentTaskId={parentTaskId}/>
            {relevantTasks.length === 0 && (<p className="text-stone-800 my-4"> This Project does not have any Tasks yet.</p>)}
            {relevantTasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {relevantTasks.map((task) => (
                <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button className="text-stone-700 hover:text-red-500" onClick={() => {handleDeleteTask(task.id)}}>Clear</button>
                </li>
                ))}
            </ul>
            )}
        </section>
     )
}