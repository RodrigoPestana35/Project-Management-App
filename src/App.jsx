import { useState } from "react";
import NewProject from "./components/NewProject";
import NoneProjectSelected from "./components/NoneProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,  //undefined significa que não estamos a fazer nada
    projects: [],
    tasks: []
  });

  function handleAddTask(text){
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        text: text,
        projectId: prevState.selectedProject
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
    console.log(projectsState.tasks)
  }

  function handleDeleteTask(taskId){
    setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId)
      }
    })
  }

  function handleSelectProject(projectId) {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProject: projectId  //seleciona o projeto com base no id do projeto selecionado
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

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject),
        selectedProject: undefined  //undefined significa que não estamos a fazer nada
      }
    })
  }

  // encontra o projeto selecionado com base no id do projeto selecionado no estado
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  // variável content que armazena o componente a ser renderizado com base no estado do projeto selecionado
  // por padrão, o componente a ser renderizado é o componente SelectedProject
  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if(projectsState.selectedProject === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectedProject === undefined){
    content = <NoneProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProject}/>
      {content}
    </main>
  );
}

export default App;
