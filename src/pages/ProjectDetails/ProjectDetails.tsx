import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { findProject } from '../../utilities/findProject';
import ProjectDetailCard from '../../components/ProjectDetailCard';

const ProjectDetails = () => {
  //route path reminder '/projects/:projectId'
  let { projectId } = useParams();
  let project = findProject(projectId);

  return (
    <section className='project-detail-shell'>
      <header className='project-detail-header'>
        <p className='projects-eyebrow'>Project Breakdown</p>
        <h1>{project.title}</h1>
      </header>

      <ProjectDetailCard project={project} />

      <figure className='project-detail-figure'>
        <img src={project.image} alt={project.title} className='img-fluid shadow' />
        <figcaption>Screen image from app</figcaption>
      </figure>

      {project.image2 && (
        <figure className='project-detail-figure'>
          <img src={project.image2} alt={project.title} className='img-fluid shadow' />
          <figcaption>Screen image from app</figcaption>
        </figure>
      )}

      <div className='column-centered-content project-detail-footer'>
        <Link to='/projects' className='btn btn-lg btn-outline-dark mb-3 mt-3 shadow'>
          Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
