import TechSkillsCard from "../../components/TechSkillsCard"
function About(){
  
  return (  

    <>
      <h1>About</h1>
      <div id='main-content-container'>

      <img className="card-img-top mb-3 card-image" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
      <div className="card-deck" id="about-card-container">
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title">From Product Owner to Developer...</h3>
            <p>After many years of Product Management, Patrick found his favorite part of the job was spent investigating code with fellow developers.  After a period of self-teaching, in 2022 he initiated a formal career switch into Software Development by entering a full-time bootcamp at General Assembly.</p> 
            <a href="/projects">
                <button className="btn btn-dark">View Projects</button>
            </a>
          </div>
        </div>
        <TechSkillsCard/>
        <div className="card m-3">
          <div className="card-body">
            <h3 className="card-title">Industry Experience</h3>
            <ul>
              <li className="">CRMs: Custom Management systems</li>
              <li className="">HR: Disclosure/COI, Policy Management systems, Learning Management</li>
              <li className="">Lead management: Lead enhancement and distribution </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About