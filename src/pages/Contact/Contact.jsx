function Contact(){
  return (  
    <>
      <h1>Contact</h1>
      <a href="/about">
        <button className="btn btn-outline-dark">Back to About</button>
      </a>
      <div className="card w-50 m-3">
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
                <a href="/resume/Patrick-Cheung-resume.pdf" download>Download Resume</a>
              </li>
            </ul>
        </div>
      </div>      
      <div className="card w-50 m-3">
        <div className="card-body">
          <h3 className="card-title">Personal Life</h3>
          <p>Patrick is an avid fisherman and plays multiple music instruments.  He resides in San Antonio Texas with his wife and two children.</p> 
        </div>
      </div>
    </>
  )
}
  
export default Contact