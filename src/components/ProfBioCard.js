const ProfBioCard = () => {
  return (  
    <div className="card m-3">
      <div className="card-body">
        <h3 className="card-title">Experience Summary</h3>
        <ul>
          <li>Recent Software Developer Training</li>
          <li>Product Owner (5+ yrs)</li>
          <li>Technical Support and Implementation Roles</li>
        </ul> 
        <a href="/resume/Resume-Patrick-Cheung.pdf" download>
          <button className="btn btn-dark">Download Full Resume</button>
        </a>
      </div>
    </div>
  )
}

export default ProfBioCard;