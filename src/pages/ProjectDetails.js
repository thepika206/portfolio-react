import { projectsData as projects } from "../data/projects"
const ProjectDetails = () => {
  return (
    <>
      <h1> {projects[0].title} </h1>
      <a target="_blank" rel="noopener noreferrer" href={projects[0].deploymentLink}>
        <img src={projects[0].image} alt={projects[0].title} className="project-thumbnail"/>
      </a>
      <p>
        {projects[0].description} - visit the <a target="_blank" rel="noopener noreferrer" href={projects[0].deploymentLink}>live deployed site</a> or click here for the <a target="_blank" rel="noopener noreferrer" href={projects[0].repositoryLink}>githut project</a>
      </p>
      <h5>
          Technologies Used:
      </h5> 
      <p>{projects[0].technologies}</p>
    </>  
  )
}

export default ProjectDetails
