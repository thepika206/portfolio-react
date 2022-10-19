import { hyphenateWords } from "../utilities/hyphenateWords";

const ProjectPreview = ({project}) => {
  console.log(project.title)
  let projectUrl = ('/projects/' + hyphenateWords(project.title))
  console.log(projectUrl)
  return (  
    <li>
        <div>
          <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
            <img src={project.image} alt={project.title} className="project-thumbnail"/>
          </a>
        <section>
          <h3>{project.title}</h3>
        <a href={projectUrl}>
          <button> Learn More </button>
        </a>
          
        </section>

        
        </div>
      </li>
  );
} 
export default ProjectPreview