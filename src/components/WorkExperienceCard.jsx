const WorkExperienceCard = ({ experience }) => {
  return (
    <article className='experience-card shadow'>
      <h3 className='text-center mb-3'>{experience.title}</h3>
      <p className='text-center mb-3'>
        {experience.company} - {experience.start} to {experience.end}
      </p>
      <p className='mb-3'>
        <span className='fw-bold'>Achievements:</span> {experience.achievements}
      </p>
      <p className='mb-3'>
        <span className='fw-bold'>Skills:</span> {experience.skills}
      </p>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={experience.URL}
        aria-label={`Visit ${experience.company} website (opens in new tab)`}
      >
        Visit {experience.company} Website
      </a>
    </article>
  );
};

export default WorkExperienceCard;
