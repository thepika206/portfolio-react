const ProfBioCard = () => {
  return (  
    <div className="card m-3">
      <div className="card-body">
        <h3 className="card-title">From Product Owner to Developer...</h3>
        <p>After many years of Product Management, Patrick found his favorite part of the job was spent investigating code with fellow developers.  After a period of self-teaching, in 2022 he initiated a formal career switch into Software Development by entering a full-time bootcamp at General Assembly.</p> 
        <a href="/projects">
            <button className="btn btn-dark">View Projects</button>
        </a>
      </div>
    </div>
  )
}

export default ProfBioCard;