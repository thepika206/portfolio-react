import WorkExperienceCard from '../../components/WorkExperienceCard';
import EducationCard from '../../components/EducationCard';
import { Link } from 'react-router-dom';
import workExperience from '../../data/workExperience';
import educationData from '../../data/education.json';

function Resume() {
  return (
    <section className='resume-section'>
      <h2 id='experience-heading'>Experience</h2>
      <ul className='resume-card-list column justify-content-center card-deck mt-5'>
        {workExperience.map((experience) => (
          <li className='resume-card-item' key={experience.start}>
            <WorkExperienceCard experience={experience} />
          </li>
        ))}
      </ul>

      <h2 id='education-heading' className='mt-3'>
        Education
      </h2>
      <ul className='resume-card-list column justify-content-center card-deck mt-5'>
        {educationData.map((education) => (
          <li className='resume-card-item' key={`${education.institution}-${education.field}`}>
            <EducationCard education={education} />
          </li>
        ))}
      </ul>

      <div className='resume-cta-row'>
        <Link to='/contact' className='btn btn-lg btn-dark m-3 shadow'>
          Contact Info
        </Link>
      </div>
    </section>
  );
}

export default Resume;
