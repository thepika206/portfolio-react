const WorkExperienceCard = ({experience}) => {
  return (  
    <article className="experience-card shadow">
      <h3 className="text-center mb-3">{experience.title}</h3>
      <h5 className="text-center mb-3">{experience.company} - {experience.start} to {experience.end}</h5>
      <h5 className="mb-3"><span className="fw-bold">Achievements:</span> {experience.achievements}</h5>
      <h5 className="mb-3"><span className="fw-bold">Skills:</span> {experience.skills}</h5>
      <a target="_blank" rel="noopener noreferrer" href={experience.URL}> <p>{experience.URL}</p> </a> 
    </article>
  )
}

export default WorkExperienceCard