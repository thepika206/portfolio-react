const JokeCard = (props) => {
  return (  
    <>
      <div className="card p-4 m-5 contact-card shadow">
          <div className="card-body">
            <h3 className="card-title">Just for Fun: Random Chuck Norris Joke</h3>
            <p>{props.joke?.value}</p>
            <p>Credit: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></p> 
          </div>
        </div>
    </>
    
    
  
  )
}

export default JokeCard;