import { useState } from 'react'
import NoProjectInfo from "./components/NoProjectInfo";
import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";

function App() {
  const [createProject, setCreateProject] = useState(false);
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar setCreateProject={setCreateProject} />
        {createProject ? <ProjectForm /> : <NoProjectInfo setCreateProject={setCreateProject} />}
      </main>
    </>
  );
}

export default App;
