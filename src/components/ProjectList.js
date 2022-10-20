import ProjectPreview from "./ProjectPreview";

const ProjectList = ({projects}) => {
  return (  
    <div>
    {projects.map(project => 
      <ProjectPreview 
        key={project.repositoryLink}
        project={project}
      />
    )}
    </div>

  )
}

export default ProjectList;