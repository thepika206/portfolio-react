import HomeCard from "../../components/HomeCard"
import './home.css'
import TechSkillsCard from "../../components/TechSkillsCard"

function Home(){
  return (  
    <>
      <div id="home-container">
        <div className="m-3" id='home-image-container'>
          <img id="home-image" className="shadow" src="https://i.imgur.com/rp5M5ah.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
        </div>
        <HomeCard/>  
        <div id="home-title" className="m-3">
          {/* <h3>Patrick Cheung - Full Stack Developer</h3> */}
        </div>
        <TechSkillsCard/>
        <a href="/projects">
          <button className="mb-3 btn btn-lg btn-dark shadow">View Projects</button>
        </a>
      </div>
      {/* <a href="/projects">
          <button className="mb-3 btn btn-dark shadow">View Projects</button>
      </a> */}
    </>
  )
}

export default Home