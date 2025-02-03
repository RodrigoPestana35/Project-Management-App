import { useState } from 'react'
import NoProjectInfo from "./components/NoProjectInfo";
import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";
import ProjectPage from './components/ProjectPage';

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [inProject, setInProject] = useState();
  const [projects, setProjects] = useState([]);
  
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar setCreateProject={setCreateProject} projects={projects} setInProject={setInProject}/>
        {createProject ? <ProjectForm setProjects={setProjects} setCreateProject={setCreateProject}/> : (inProject ? <ProjectPage project={inProject}/> : <NoProjectInfo setCreateProject={setCreateProject} />)}
      </main>
    </>
  );
}

export default App;
