import WorkExperienceCard from '../../components/WorkExperienceCard';
import workExperience from '../../data/workExperience';

function Resume({ isDownloadableResume }) {
  return (
    <section>
      <h2>Experience</h2>
      {isDownloadableResume && (
        <span>
          <a href='/resume/Resume-Patrick-Cheung.pdf' download>
            <button className='btn btn-dark shadow'>Download PDF</button>
          </a>
        </span>
      )}
      <div className='column justify-content-center card-deck mt-5'>
        {workExperience.map((experience) => (
          <WorkExperienceCard key={experience.start} experience={experience} />
        ))}
      </div>
      <a href='/contact'>
        <button className='btn btn-lg btn-dark m-3 shadow'>Contact Info</button>
      </a>
    </section>
  );
}

export default Resume;
