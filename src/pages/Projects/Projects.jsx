import ProjectList from "../../components/ProjectList"
import { projectsData } from "../../data/projects"

function Projects(){
  return (  
    <>
      <h1>Projects</h1>
      <ProjectList 
        projects={projectsData}
      />
    </>
  )
}

export default Projects