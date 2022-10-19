import { projectsData as projects } from "../data/projects";
import { hyphenateWords } from "./hyphenateWords";

function findProject(string){
  const result = projects.filter(project => 
    hyphenateWords(project.title)
  )
  return result[0]
}

export{
  findProject
}