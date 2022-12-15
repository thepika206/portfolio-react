const WorkExperienceCard = ({experience}) => {
  return (  
    <article className="experience-card shadow">
      <h3 className="text-center mb-3">{experience.title}-{experience.company}</h3>
      <h5 className="text-center mb-3">{experience.start} to {experience.end}</h5>
      <h5 className="mb-3">Achievements: {experience.achievements}</h5>
      
      <a href="{experience.URL}"> <p>{experience.URL}</p> </a>
      
    </article>
  )
}

export default WorkExperienceCard