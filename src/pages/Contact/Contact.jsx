function Contact(){
  return (  
    <>
      <div className="page-container-center">
        <div className="card p-2">
          <div className="card-body">
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
            </ul>
            <a href="/resume/resume/Patrick-Cheung-resume.pdf" download>
                <button className="btn btn-dark">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
      
      
    </>
  )
}
  
export default Contact