import ProjectPreview from './ProjectPreview';

const ProjectList = ({ projects }) => {
  return (
    <div className='projects-grid mt-4'>
      {projects.map((project) => (
        <ProjectPreview key={project.repositoryLink} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
