import './contact.css'

function Contact(props){
  return (  
    <>
      <h1>Contact</h1>
      <div id="contact-info-card" className="card p-4 m-5 contact-card">
        <div className="card-body">
          <h3 className="card-title">Connect with Me</h3>
          <ul>
              <li>
                <a href="mailto:pika206@gmail.com">
                  <img className="icon" src="images/icons/icons8-mail-50.png" alt="email" />
                  pika206@gmail.com
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/patrick-cheung206/">
                  <img className="icon" src="images/icons/LI-In-Bug.png" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://github.com/thepika206">
                  <img className="icon" src="images/icons/github-mark.png" alt="GitHub" />
                </a>
              </li>
              <li>
                <img src="https://www.codewars.com/users/thepika206/badges/small
                " alt="codewars badge" />
              </li>
            </ul>
            
        </div>
      </div>      
      <div className="card p-4 m-5 contact-card">
        <div className="card-body">
          <h3 className="card-title">Personal Life</h3>
          <p>I live in San Antonio, Texas and enjoy spending time with my family, woodworking and playing music.</p> 
        </div>
      </div>
      <div className="card p-4 m-5 contact-card">
        <div className="card-body">
          <h3 className="card-title">Just for Fun: Random Chuck Norris Joke</h3>
          <p>{props.joke.value}</p>
          <p>Credit: <a href="https://api.chucknorris.io/">https://api.chucknorris.io/</a></p> 
        </div>
      </div>
    </>
  )
}
  
export default Contact