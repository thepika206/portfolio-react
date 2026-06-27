const WorkExperienceCard = ({ experience }) => {
  return (
    <article className='experience-card shadow'>
      <h2 className='text-center mb-3'>{experience.title}</h2>
      <p className='text-center mb-3'>
        {experience.company} - {experience.start} to {experience.end}
      </p>
      <p className='mb-3'>
        <span className='fw-bold'>Achievements:</span> {experience.achievements}
      </p>
      <p className='mb-3'>
        <span className='fw-bold'>Skills:</span> {experience.skills}
      </p>
      <a target='_blank' rel='noopener noreferrer' href={experience.URL}>
        {' '}
        <p>{experience.URL}</p>{' '}
      </a>
    </article>
  );
};

export default WorkExperienceCard;
