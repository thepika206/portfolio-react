const WorkExperienceCard = ({experience}) => {
  return (  
    <article className="experience-card">
      <h3>{experience.title}-{experience.company}</h3>
      <h5>{experience.start} to {experience.end}</h5>
      <h5>Achievements: {experience.achievements}</h5>
      
      <a href="{experience.URL}"> <p>{experience.URL}</p> </a>
      
    </article>
  )
}

export default WorkExperienceCard