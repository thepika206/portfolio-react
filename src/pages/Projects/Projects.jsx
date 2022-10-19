import ProjectList from "../../components/ProjectList"
import { projectsData } from "../../data/projects"

function Projects(){
  return (  
    <>
      <h1>Projects</h1>
      <div>
        <ProjectList projects={projectsData} />
      </div>
    </>
  )
}

export default Projects