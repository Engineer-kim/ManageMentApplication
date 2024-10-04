import Button from "./Button";

export default function SelectedProject({selectProject , handleDeleteProject}) {

    const formatDate = new Date(selectProject.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })



    return (
        <>
            <div className="w-[35rem] mt-16">
                <header className="pb-a4 mb-4 border-b-2 border-stone-300">
                    <div className="flex  item-cneter justify-between">
                        <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectProject.title}</h1>
                        <button className="text-stone-600 hover:tedxt-stone-950" onClick={handleDeleteProject}>Delete</button>
                    </div>
                    <p className="mb-4 text-stone-400">{formatDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{selectProject.description}</p>
                </header>
                TASKS
            </div>
        </>
    )
}