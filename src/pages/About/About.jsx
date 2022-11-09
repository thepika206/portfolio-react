import TechSkillsCard from "../../components/TechSkillsCard"
import IndustryXpCard from "../../components/IndustryXpCard"
import ProfBioCard from "../../components/ProfBioCard"
function About(){
  
  return (  
    <>
      <h1>About</h1>
      <div id='main-content-container' className="container">
        <div className="row">
          <div className="col"><TechSkillsCard/></div>
          <div className="col">
            <img className="mt-3 img-fluid" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
          </div>
        </div>
        <div className="row">
          <div className="col"><ProfBioCard/></div>
          <div className="col"><IndustryXpCard/></div>
        </div>
      </div>
    </>
  )
}

export default About