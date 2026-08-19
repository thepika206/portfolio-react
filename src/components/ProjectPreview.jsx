import { Link } from 'react-router-dom';
import { hyphenateWords } from '../utilities/hyphenateWords';

const ProjectPreview = ({ project }) => {
  let projectUrl = '/projects/' + hyphenateWords(project.title);

  return (
    <article className='card m-2 project-preview-card shadow'>
      <div className='card-img-top project-preview-thumbnail-frame'>
        <Link to={projectUrl} aria-label={`Open details for ${project.title}`}>
          <img src={project.image} alt={project.title} className='project-thumbnail' />
        </Link>
      </div>
      <div className='card-body'>
        <div className='project-preview-description'>
          <h2 className='project-preview-title'>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            <span className='fw-bold'>Key Technologies: </span>
            {project.technologies}
          </p>
        </div>

        <div className='project-preview-actions'>
          {project.deploymentLink && (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={project.deploymentLink}
              className='btn btn-dark shadow'
            >
              Launch App
            </a>
          )}

          <Link to={projectUrl} className='btn btn-outline-dark shadow'>
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ProjectPreview;
