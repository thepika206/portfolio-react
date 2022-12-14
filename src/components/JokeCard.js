const JokeCard = (props) => {
  return (  
    <>
      <div className="card p-4 m-5 contact-card shadow">
          <div className="card-body">
            <h3 className="card-title">Just for Fun: Random Chuck Norris Joke</h3>
            <p>I discovered a Chuck Norris Joke API and implemented it here as a reward for anyone that made it to the last page in my portfolio.  By refreshing your page, you'll see a different random joke.  Enjoy!</p>
            <h5 className="mb-5">{props.joke?.value}</h5>
            <h6>Credit: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></h6> 
          </div>
        </div>
    </>
    
    
  
  )
}

export default JokeCard;