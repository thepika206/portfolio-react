import TechSkillsCard from "../../components/TechSkillsCard"
import IndustryXpCard from "../../components/IndustryXpCard"
import ProfBioCard from "../../components/ProfBioCard"
function About(){
  
  return (  
    <>
      <h1>About</h1>
      <a href="/projects">
        <button className="btn btn-dark">View Projects</button>
      </a>
      <div id='main-content-container' className="container">
        <div className="row">
          <div className="col"><TechSkillsCard/></div>
          <div className="col"><ProfBioCard/></div>
        </div>
        <div className="row">
          {/* <div className="col"><ProfBioCard/></div> */}
          {/* <div className="col"><IndustryXpCard/></div> */}
        </div>
      </div>
    </>
  )
}

export default About