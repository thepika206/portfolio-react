const EducationCard = ({ education }) => {
  return (
    <article className='experience-card education-card shadow'>
      <h3 className='text-center mb-3'>{education.field}</h3>
      <p className='text-center mb-3'>
        {education.institution} - {education.location}
      </p>
      <p className='mb-3'>
        <span className='fw-bold'>Highlights:</span> {education.achievements}
      </p>
      {education.skills && education.skills.trim() && (
        <p className='mb-3'>
          <span className='fw-bold'>Skills:</span> {education.skills}
        </p>
      )}
    </article>
  );
};

export default EducationCard;
