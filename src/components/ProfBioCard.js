const ProfBioCard = () => {
  return (  
    <div className="card m-3">
      <div className="card-body">
        <h3 className="card-title">PO Experience</h3>
        <ul>
          <li>Real-World Software Knowledge</li>
          <li>Functional Testing and Design Experience</li>
          <li>Intensely Curious</li>
        </ul> 
        <a href="/projects">
            <button className="btn btn-dark">View Projects</button>
        </a>
      </div>
    </div>
  )
}

export default ProfBioCard;