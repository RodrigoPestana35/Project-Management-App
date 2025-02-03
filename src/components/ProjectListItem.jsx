export default function ProjectListItem({ project, setInProject }) {

    function handleProjectClick() {
        setInProject(project);
    }

    return (
      <li onClick={handleProjectClick} className="flex justify-between my-4">
        {project.title}
      </li>
    );

}