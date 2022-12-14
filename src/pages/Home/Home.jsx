import HomeCard from "../../components/HomeCard"
import './home.css'
import TechSkillsCard from "../../components/TechSkillsCard"

function Home(){
  return (  
    <>
      <div id="home-container">
        <div className="home-image-container" >
          <img id="home-image" className="shadow" src="https://i.imgur.com/rp5M5ah.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
        </div>
        <HomeCard/> 
        <TechSkillsCard/>
      </div>
      <a href="/projects">
        <button className="mb-3 btn btn-lg btn-dark shadow">View Projects</button>
      </a>
    </>
  )
}

export default Home