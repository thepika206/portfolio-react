// import { projectsData as projects } from "../data/projects"
import { useParams } from "react-router-dom"
import { findProject } from "../utilities/findProject"

const ProjectDetails = () => {
//route path reminder '/projects/:projectId'
  let { projectId }  = useParams() 
  let project = findProject(projectId)
  
  return (
    <div className="p-3">
      <a href="/projects">
        <button className="btn btn-outline-dark mb-3 mt-3">Back to Projects</button>
      </a>
      <h1> {project.title} 
        <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
          <button className="btn btn-dark m-3">
          Launch Live App
          </button>
        </a>
      </h1>
      <p>{project.description}</p>
      <h3>Summary</h3>
      <ul>
        <li>Technologies: {project.technologies}</li>
        {project.otherContributors?<li>{project.otherContributors}</li>: <></>}
        <li><a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>Live Deployed App</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href={project.repositoryLink}>GitHub Project</a></li>
      </ul>
      
      <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
        <img src={project.image} alt={project.title} className="img-fluid"/>
      </a>
      <h5>Screen image from app</h5>
    </div>
  )
}

export default ProjectDetails
