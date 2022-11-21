const ProfBioCard = () => {
  return (  
    <div className="card m-3">
      <div className="card-body">
        <h3 className="card-title">Professional Background in Software</h3>
        <ul>
          <li>Technical Support, Implementation</li>
          <li>Product Owner (5+ yrs)</li>
          <li>CAREER PIVOT to Software Developer</li>
        </ul> 
        <a href="/resume/Resume-Patrick-Cheung.pdf" download>
          <button className="btn btn-dark">Download Full Resume</button>
        </a>
      </div>
    </div>
  )
}

export default ProfBioCard;