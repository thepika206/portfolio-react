import HomeCard from "../../components/HomeCard"
import './home.css'
import TechSkillsCard from "../../components/TechSkillsCard"

function Home(){
  return (  
    <>
      <div id="home-container">
        <div className="m-3" id='home-image-container'>
          <img id="home-image" className="" src="https://i.imgur.com/rp5M5ah.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
        </div>
        <div id="home-title" className="m-3">
          <h1 id='home-title'>👋 I'm Patrick Cheung</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <a href="/projects">
          <button className="mb-3 btn btn-dark">View Projects</button>
        </a>
        <TechSkillsCard/>
        <HomeCard/>  
      </div>
      <a href="/projects">
          <button className="mb-3 btn btn-dark">View Projects</button>
      </a>
    </>
  )
}

export default Home