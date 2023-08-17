import { hyphenateWords } from '../utilities/hyphenateWords';

const ProjectPreview = ({project}) => {
  let projectUrl = ('/projects/' + hyphenateWords(project.title));
  return (  
    <div className="card m-2 project-preview-card shadow">
      <div className="card-img-top project-preview-thumbnail-frame">
        <a href={projectUrl}>
          <img src={project.image} alt={project.title} className="project-thumbnail"/>
        </a>
      </div>
      <div className="card-body">
        <div className="project-preview-description">
          <h3>{project.title}</h3>
          <p>
            <span className="fw-bold">Key Technologies: </span>{project.technologies}
          </p>
        </div>
        {project.deploymentLink
          ?<a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
            <button className="btn btn-dark m-3 shadow">
                Launch App
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
}; 
export default ProjectPreview;
