import ProjectPreview from "./ProjectPreview";

const ProjectList = ({projects}) => {
  return (  
    <div className="row justify-content-center card-deck">
    {/* <div className="card-group"> */}
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