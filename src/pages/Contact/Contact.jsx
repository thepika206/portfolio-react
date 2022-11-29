function Contact(){
  return (  
    <>
      <h1>Contact</h1>
      {/* <a href="/about">
        <button className="btn btn-outline-dark">Back to About</button>
      </a> */}
      <div className="card m-3 contact-card">
        <div className="card-body">
          <h3 className="card-title">Information</h3>
          <ul>
              <li>
                <a href="mailto:pika206@gmail.com">pika206@gmail.com</a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/patrick-cheung206/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/thepika206">GitHub</a>
              </li>
              <li>
                <a href="/resume/Resume-Patrick-Cheung.pdf" download>Download Resume</a>
              </li>
            </ul>
            <img src="https://www.codewars.com/users/thepika206/badges/small" alt="codewars badge" />
        </div>
      </div>      
      <div className="card m-3 contact-card">
        <div className="card-body">
          <h3 className="card-title">Personal Life</h3>
          <p>Patrick Cheung is originally from Seattle, Washington, and now lives in San Antonio, Texas.</p> 
        </div>
      </div>
    </>
  )
}
  
export default Contact