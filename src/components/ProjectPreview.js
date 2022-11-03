import { hyphenateWords } from "../utilities/hyphenateWords";

const ProjectPreview = ({project}) => {
  console.log(project.title)
  let projectUrl = ('/projects/' + hyphenateWords(project.title))
  console.log(projectUrl)
  return (  
    <div className="">
        <div className="card mb-2">
          <a href={projectUrl}>
            <img src={project.image} alt={project.title} className="project-thumbnail card-image p-2"/>
          </a>
        <div className="card-body">
          <h3>{project.title}</h3>
          <h6>{project.technologies}</h6>
        <a href={'/projects/' + hyphenateWords(project.title)}>
          <button className="btn btn-outline-dark mb-3"> Learn More </button>
        </a>
          
        </div>

        
        </div>
      </div>
  );
} 
export default ProjectPreview