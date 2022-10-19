const ProjectPreview = ({project}) => {
  return (  
    <li>
        <div>
          <a target="_blank" rel="noopener noreferrer" href={project.deploymentLink}>
            <img src={project.image} alt={project.title} className="project-thumbnail"/>
          </a>
        <section>
          <h3>{project.title}</h3>
          <button> Learn More </button>
        </section>

        
        </div>
      </li>
  );
} 
export default ProjectPreview