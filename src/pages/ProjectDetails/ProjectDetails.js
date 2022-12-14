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
      <div className="column-centered-content">
        <h1> {project.title} </h1>
      </div>

      <ProjectDetailCard project={project} />
      <div className="m-5">
        <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
          <img src={project.image} alt={project.title} className="img-fluid shadow"/>
        </a>
        <h5>Screen image from app</h5>
      </div>
      {project.image2 
        ? <>
            <div className="m-5">
              <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
                <img src={project.image2} alt={project.title} className="img-fluid shadow"/> 
              </a>
              <h5>Screen image from app</h5>
            </div>
          </>
        : <></>
      }
      <div className="column-centered-content">
        <a href="/projects">
          <button className="btn btn-lg btn-outline-dark mb-3 mt-3 shadow">Back to Projects</button>
        </a>
      </div>
    </div>
  )
}

export default ProjectDetails
