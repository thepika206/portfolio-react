import HomeCard from "../../components/HomeCard"
import './home.css'
import TechSkillsCard from "../../components/TechSkillsCard"

function Home(){
  return (  
    <>
      <h1 id='home-title'>
      👋👋👋 I'm Patrick Cheung
      </h1>
      <a href="/projects">
          <button className="mb-3 btn btn-dark">View Projects</button>
      </a>
      <div id="home-container">
        <div className="card home-card" id='home-image-container'>
          <img id="home-image" className="" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
        </div>
        <HomeCard/>
        <TechSkillsCard/>
          
      </div>
      <a href="/projects">
          <button className="mb-3 btn btn-dark">View Projects</button>
      </a>
    </>
  )
}

export default Home