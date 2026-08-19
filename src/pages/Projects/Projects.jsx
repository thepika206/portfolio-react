import ProjectList from '../../components/ProjectList';
import projectsData from '../../data/projects.json';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className='projects-shell'>
      <header className='projects-hero'>
        <p className='projects-eyebrow'>Selected Work</p>
        <h1>Projects</h1>
        <p className='projects-intro'>
          Product-minded builds across web apps, UI systems, and practical problem solving.
        </p>
      </header>
      <ProjectList projects={projectsData} />

      <div className='projects-cta-row'>
        <Link to='/' className='btn btn-lg btn-dark m-3 shadow'>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Projects;
