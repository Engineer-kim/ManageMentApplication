import Button from "./Button";

export default function ProjectSidebar({ handleStartAddProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rpimded-r-xl">
            <h2 className="mb-8 font-bold md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={
                    handleStartAddProject
                }>+ Add Project</Button>
            </div>
            <ul></ul>
        </aside>
    )
}