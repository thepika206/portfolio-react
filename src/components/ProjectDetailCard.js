const ProjectDetailCard = ({project}) => {
  return (  
    <>
      <div className="card mb-2">
        <div className="card-body">
        <h5>{project.description}</h5>
        <ul>
          <li className="fw-bold">Technologies: {project.technologies}</li>
          <li>Lessons Learned: {project.takeaways}</li>
          {project.otherContributors?<li>{project.otherContributors}</li>: <></>}
          <li><a target="_blank" rel="noopener noreferrer" href={project.repositoryLink}>GitHub Project</a></li>
        </ul>
        <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
          <button className="btn btn-dark m-3">
          Launch Live App
          </button>
        </a>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailCard;