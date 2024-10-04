import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    });
  }

 function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }


      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

 

    let content

    if (projectsState.selectedProjectId === null) {
      content = <NewProject handleAddProject={handleAddProject}  handleCancelAddProject={handleCancelAddProject} />
    } else if (projectsState.selectedProjectId === undefined) {
      content = <NoProjectSelected handleStartAddProject={handleStartAddProject} />
    }


    return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar handleStartAddProject={handleStartAddProject}
          projects={projectsState.projects} />
        {content}
      </main>
    );
  }

  export default App;
