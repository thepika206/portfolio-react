import WorkExperienceCard from "../../components/WorkExperienceCard"


function Resume({workExperience}){
  return (  
    <>  
      <h1>
        Resume
      </h1>
      <span>
        <a href="/resume/Resume-Patrick-Cheung.pdf" download>
          <button className="btn btn-outline-dark">Download PDF</button>
        </a>
        <a href="/contact">
          <button className="btn btn-dark m-3">Contact Info</button>
        </a>
      </span>
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