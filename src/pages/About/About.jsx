function About(){
  return (  
    <>
    <h1>About</h1>
    <div className="card w-25 mb-3" >
      <img className="card-img-top" src="https://i.imgur.com/hcGYNrO.jpg" title="source: imgur.com" alt="headshot of Patrick Cheung" />
      <div className="card-body">
        <h3 className="card-title">Technical Skills</h3>
        <ul>
          <li>React.js (this site is built in React btw!)</li>
          <li>Node.js and Express</li>
          <li>Mongo and Mongoose</li>
          <li>Model View Controller</li>
          <li>Single Page Application</li>
        </ul>
        <a href="/projects">
            <button className="btn btn-primary">See the Projects</button>
        </a>
      </div>
    </div>

    <div className="card w-25 mb-3">
      <div className="card-body">
        <h3 className="card-title">Product Management</h3>
        <ul>
          <li>Agile Backlog and Roadmap prioritization</li>
          <li>Scrum Sprint execution</li>
          <li>User Stories and Acceptance Testing</li>
          <li>Product Release Management</li>
        </ul>
        
      </div>
    </div>
    <div className="card w-25 mb-3">
      <div className="card-body">
        <h3 className="card-title">Industry Experience</h3>
        <ul>
          <li>Insurance: Customer, Agency Management systems</li>
          <li>Human Resources: Ethics, Policy Management systems</li>
          <li>Lead Sales and Marketing: Lead acquisition and distribution systems</li>
        </ul>

      </div>
    </div>
    <div className="card w-25 mb-3">
      <div className="card-body">
        <h3 className="card-title">Life beyond Work</h3>
        <p>Patrick is a natural leader and ambassador in his many interests including playing the bass in a community band and bringing up the next generation of catch and release fishermen.    Born in the Pacific Northwest, Patrick now resides in San Antonio Texas with his wife Melinda raising their two children.</p> 

      </div>
    </div>
    </>
  )
}

export default About