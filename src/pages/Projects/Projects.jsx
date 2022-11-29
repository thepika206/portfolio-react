import ProjectList from "../../components/ProjectList"
import { projectsData } from "../../data/projects"

function Projects(){
  return (  
    <>
      <h1>Projects</h1>
      <span>
      {/* <a href="/about">
        <button className="btn btn-outline-dark m-3">Back to About</button>
      </a> */}
      <a href="/resume">
        <button className="btn btn-dark m-3">View Resume</button>
      </a>
      </span>
      <div className="">
        <ProjectList projects={projectsData} />
      </div>
    </>
  )
}

export default Projects