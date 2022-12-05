import './contact.css'

function Contact(){
  return (  
    <>
      <h1>Contact</h1>
      <div className="card m-3 contact-card">
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
      <div className="card m-3 contact-card">
        <div className="card-body">
          <h3 className="card-title">Personal Life</h3>
          <p>I live in San Antonio, Texas and enjoy spending time with my family, woodworking and playing music.</p> 
        </div>
      </div>
    </>
  )
}
  
export default Contact