import Button from "./Button";

export default function NoProjectSelected({ handleStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img  src="../../public/logo.png"
            alt="An Empty Task list"
            className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">Select a Project or get Starte with a new One</p>
            <p  className="mt-8">
                <Button onClick={handleStartAddProject}> Create New Project</Button>
            </p>
        </div>
    )
}