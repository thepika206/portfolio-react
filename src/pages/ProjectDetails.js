// import { projectsData as projects } from "../data/projects"
import { useParams } from "react-router-dom"
import { findProject } from "../utilities/findProject"

const ProjectDetails = () => {
  let { projectId }  = useParams()
  let project = findProject(projectId)
  
  return (
    <>
      <h1> {project.title} </h1>
      <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
        <img src={project.image} alt={project.title} className="project-thumbnail"/>
      </a>
      <p>
        {project.description} - visit the <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>live deployed site</a> or click here for the <a target="_blank" rel="noopener noreferrer" href={project.repositoryLink}>GitHub project</a>
      </p>
      <h5>
          Technologies Used:
      </h5> 
      <p>{project.technologies}</p>
    </>  
  )
}

export default ProjectDetails
