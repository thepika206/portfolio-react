import ProjectList from "../../components/ProjectList"
import { projectsData } from "../../data/projects"

function Projects(){
  return (  
    <>
      <h1>Projects</h1>
      <ProjectList projects={projectsData} />
      <span>
      <a href="/resume">
        <button className="btn btn-lg btn-dark m-3 shadow">View Resume</button>
      </a>
      </span>
    </>
  )
}

export default Projects