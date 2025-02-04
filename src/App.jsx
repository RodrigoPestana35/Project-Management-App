import { useState } from "react";
import NewProject from "./components/NewProject";
import NoneProjectSelected from "./components/NoneProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,  //undefined significa que não estamos a fazer nada
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProject: null,  //null significa que estamos a adicionar um novo projeto
      }
    })
  }

  let content;

  if(projectsState.selectedProject === null){
    content = <NewProject />
  } else if(projectsState.selectedProject === undefined){
    content = <NoneProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
