function Contact(){
  return (  
    <>
      <div className="page-container-center">
        <div className="card">
          <img 
            className="card-img-top mb-3 card-image" 
            src="https://i.imgur.com/hcGYNrO.jpg" 
            title="source: imgur.com" 
            alt="headshot of Patrick Cheung" 
          />
          <div className="card-body p-2">
            <h2 className="card-title">Contact</h2>
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
                <a href="/resume/resume/Patrick-Cheung-resume.pdf" download>Download Resume</a>
              </li>
            </ul>
            <a href="/about">
                <button className="btn btn-outline-dark">Back to About</button>
            </a>
          </div>
        </div>
      </div>
      
      
    </>
  )
}
  
export default Contact