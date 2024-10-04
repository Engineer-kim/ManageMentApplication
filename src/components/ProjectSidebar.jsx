import Button from "./Button";

export default function ProjectSidebar({ handleStartAddProject, projects, handleSelectProject,
    selectedProjectId
}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={
                    handleStartAddProject
                }>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssStyle = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                    
                    if(project.id === selectedProjectId){
                        cssStyle += "bg-stone-800 text-stone-200"
                    }else{
                        cssStyle += "text-stone-400"
                    }
                    
                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => {handleSelectProject(project.id)}}
                                className={cssStyle}>{project.title}</button>
                        </li>
                    )
                }
                )}
            </ul>
        </aside>
    )
}