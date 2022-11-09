import TechSkillsCard from "../../components/TechSkillsCard"
import IndustryXpCard from "../../components/IndustryXpCard"
import ProfBioCard from "../../components/ProfBioCard"
function About(){
  
  return (  

    <>
      <h1>About</h1>
      <div id='main-content-container'>

      <img className="card-img-top mb-3 card-image" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
      <div className="card-deck" id="about-card-container">
        <ProfBioCard/>
        <TechSkillsCard/>
        <IndustryXpCard/>
      </div>
    </div>
    </>
  )
}

export default About