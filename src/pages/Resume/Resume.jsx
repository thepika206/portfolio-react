import WorkExperienceCard from "../../components/WorkExperienceCard"


function Resume({workExperience}){
  return (  
    <>  
      <h1>
        Resume
      </h1>
      <span>
        <a href="/resume/Resume-Patrick-Cheung.pdf" download>
          <button className="btn btn-outline-dark shadow">Download PDF</button>
        </a>
      </span>
      <div className="column justify-content-center card-deck mt-5">
        {workExperience.map(experience => 
          <WorkExperienceCard 
            key={experience.start}
            experience={experience}
          />
        )}
      </div>
      <a href="/contact">
        <button className="btn btn-lg btn-dark m-3 shadow">Contact Info</button>
      </a>
    </>
  )
}

export default Resume