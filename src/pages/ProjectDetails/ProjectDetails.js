// import { projectsData as projects } from "../data/projects"
import { useParams } from "react-router-dom"
import { findProject } from "../../utilities/findProject"
import ProjectDetailCard from "../../components/ProjectDetailCard"

const ProjectDetails = () => {
//route path reminder '/projects/:projectId'
  let { projectId }  = useParams() 
  let project = findProject(projectId)
  
  return (
    <div className="p-3">
      <a href="/projects">
        <button className="btn btn-outline-dark mb-3 mt-3">Back to Projects</button>
      </a>
      <h1> {project.title} </h1>

      <ProjectDetailCard project={project} />

      <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
        <img src={project.image} alt={project.title} className="img-fluid"/>
      </a>
      <h5>Screen image from app</h5>
      {project.image2 
        ? <>
            <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
              <img src={project.image2} alt={project.title} className="img-fluid"/> 
            </a>
            <h5>Screen image from app</h5>
          </>
        : <></>
      }
    </div>
  )
}

export default ProjectDetails
