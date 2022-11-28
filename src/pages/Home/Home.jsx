import HomeCard from "../../components/HomeCard"

function Home(){
  return (  
    <>
      <h1>
        Patrick Cheung
      </h1>
      {/* <h2>Software Developer</h2> */}
      
      <div className="d-flex justify-content-center flex-sm-wrap">
        <img id="home-image" className="mb-3" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
        {/* <h4>An Engineer with Product Experience</h4> */}
        <HomeCard/>  
      </div>
      <a href="/about">
          <button className="mb-3 btn btn-dark">Learn More</button>
      </a>
    </>
  )
}

export default Home