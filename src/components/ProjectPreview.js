import { hyphenateWords } from "../utilities/hyphenateWords";

const ProjectPreview = ({project}) => {
  let projectUrl = ('/projects/' + hyphenateWords(project.title))
  return (  
      <div className="card m-2 project-preview-card shadow">
        <a href={projectUrl}>
          <img src={project.image} alt={project.title} className="project-thumbnail card-img-top p-2"/>
        </a>
        <div className="card-body">
          <h3>{project.title}</h3>
          <p className="fw-bold">Key Takeaways: {project.takeaways}</p>
          <p>Description: {project.description}</p>
          {project.deploymentLink
          ?<a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
              <button className="btn btn-dark m-3 shadow">
              Launch Live App
              </button>
            </a>
          :<></>
        }
          <a href={'/projects/' + hyphenateWords(project.title)}>
            <button className="btn btn-outline-dark m-3 shadow"> Learn More </button>
          </a>
        </div>
      </div>
  );
} 
export default ProjectPreview