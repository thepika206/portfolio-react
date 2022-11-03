function Home(){
  return (  
    <>
      <h1>
        Patrick Cheung
      </h1>
      <h2>Software Developer</h2>
      <img className="mb-3 img-fluid" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
      {/* <h4>An Engineer with Product Experience</h4> */}
      <div className="card border-light m-3" id="home-card">
          <div className="card-body">
            <h3 className="card-title">An Engineer with Product Experience</h3>
            <ul>
              <li className="fs-5">10 years experience in the Software Industry</li>
              <li className="fs-5">Recently transitioned from PO to Engineer</li>
              <li className="fs-5">A Product Minded Approach</li>
            </ul>
          </div>
        </div>
      <a href="/about">
        <button className="btn btn-dark">Learn More</button>
      </a>
    </>
  )
}

export default Home