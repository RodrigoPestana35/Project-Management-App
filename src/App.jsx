import { useState } from "react";
import NewProject from "./components/NewProject";
import NoneProjectSelected from "./components/NoneProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,  //undefined significa que não estamos a fazer nada
    projects: []
  });

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProject: projectId
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProject: null,  //null significa que estamos a adicionar um novo projeto
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject= {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject ],
        selectedProject: undefined  //undefined significa que não estamos a fazer nada
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProject: undefined  //undefined significa que não estamos a fazer nada
      }
    })
  }

  // encontra o projeto selecionado com base no id do projeto selecionado no estado
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  // variável content que armazena o componente a ser renderizado com base no estado do projeto selecionado
  // por padrão, o componente a ser renderizado é o componente SelectedProject
  let content = <SelectedProject project={selectedProject} />;

  if(projectsState.selectedProject === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectedProject === undefined){
    content = <NoneProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={selectedProject.id}/>
      {content}
    </main>
  );
}

export default App;
