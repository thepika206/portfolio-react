const ProjectDetailCard = ({ project }) => {
  return (
    <article className='card mb-2 project-detail-card shadow'>
      <div className='card-body'>
        <p className='project-detail-summary'>{project.description}</p>
        <ul className='project-detail-list'>
          <li>
            <span className='fw-bold'>Technologies:</span> {project.technologies}
          </li>
          <li>
            <span className='fw-bold'>Key takeaways:</span> {project.takeaways}
          </li>
          {project.otherContributors && (
            <li>
              <span className='fw-bold'>Collaborators:</span> {project.otherContributors}
            </li>
          )}
          <li>
            <a target='_blank' rel='noopener noreferrer' href={project.repositoryLink}>
              GitHub Repository
            </a>
          </li>
        </ul>

        <div className='project-detail-actions'>
          {project.deploymentLink && (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={project.deploymentLink}
              className='btn btn-lg btn-dark shadow'
            >
              Launch Live App
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectDetailCard;
