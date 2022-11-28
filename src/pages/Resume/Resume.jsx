import WorkExperienceCard from "../../components/WorkExperienceCard"


function Resume({workExperience}){
  return (  
    <>  
      <h1>
        Resume
      </h1>
      <a href="/resume/Resume-Patrick-Cheung.pdf" download>
        <button className="btn btn-dark">Download Resume</button>
      </a>
      <div className="row justify-content-center card-deck">
        {workExperience.map(experience => 
          <WorkExperienceCard 
            key={experience.start}
            experience={experience}
          />
        )}
    </div>
    </>
  )
}

export default Resume