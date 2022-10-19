import ProjectPreview from "./ProjectPreview";

const ProjectList = ({projects}) => {
  return (  
    <ul>
    {projects.map(project => 
      <ProjectPreview 
        key={project.repositoryLink}
        project={project}
      />
    )}
    </ul>

  )
}

export default ProjectList;