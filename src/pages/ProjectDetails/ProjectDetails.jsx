import { useParams } from 'react-router-dom';
import { findProject } from '../../utilities/findProject';
import ProjectDetailCard from '../../components/ProjectDetailCard';

const ProjectDetails = () => {
  //route path reminder '/projects/:projectId'
  let { projectId } = useParams();
  let project = findProject(projectId);

  return (
    <div className='p-3'>
      <div className='column-centered-content'>
        <h1> {project.title} </h1>
      </div>
      <ProjectDetailCard project={project} />
      <figure className='m-5'>
        <img src={project.image} alt={project.title} className='img-fluid shadow' />
        <figcaption>Screen image from app</figcaption>
      </figure>
      {project.image2 && (
        <figure className='m-5'>
          <img src={project.image2} alt={project.title} className='img-fluid shadow' />
          <figcaption>Screen image from app</figcaption>
        </figure>
      )}
      <div className='column-centered-content'>
        <a href='/projects'>
          <button className='btn btn-lg btn-outline-dark mb-3 mt-3 shadow'>Back to Projects</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
