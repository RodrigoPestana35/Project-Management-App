import NoProjectInfo from "./components/NoProjectInfo";
import ProjectForm from "./components/ProjectForm";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar />
        {/*<NoProjectInfo />*/}
        <ProjectForm />
      </main>
    </>
  );
}

export default App;
