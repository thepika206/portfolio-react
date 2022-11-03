import { techSkillsData } from "../../data/techSkills"
function About(){
  
  return (  

    <>
      <h1>About</h1>
      <img className="card-img-top mb-3 card-image" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
            <a href="/projects">
                <button className="btn btn-dark">View Projects</button>
            </a>
      <div className="card-deck" id="about-card-container">
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title">Life beyond Work</h3>
            <p>Patrick was born in the Pacific Northwest and loves the outdoors, especially bass fishing. He now resides in San Antonio Texas with his wife Melinda raising their two children and can often be found playing a friendly hand of Pokemon TCG at the kitchen table.</p> 
          </div>
        </div>
        <div className="card m-3" >
          <div className="card-body">
            <h3 className="card-title">Technologies</h3>
            <ul>
              {techSkillsData.map(skill =>
                <li className="fs-5">{skill.title}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title">Industry Product Experience</h3>
            <ul>
              <li className="">CRMs: Custom Management systems</li>
              <li className="">HR: Disclosure/COI, Policy Management systems, Learning Management</li>
              <li className="">Lead management: Lead enhancement and distribution </li>
            </ul>
            <a href="/resume/Patrick-Cheung-resume.pdf" download>
                <button className="btn btn-outline-dark">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About