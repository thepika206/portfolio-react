import './contact.css'
import JokeCard from '../../components/JokeCard'
import ContactForm from '../../components/ContactForm'

function Contact(props){
  return (  
    <>
      <h1>Contact</h1>
      <div id="contact-info-card" className="card p-4 m-5 contact-card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-3">Connect with Me</h3>
          <ul>
            <li>
              <a href="mailto:pika206@gmail.com">
                <img className="icon" src="images/icons/icons8-mail-50.png" alt="email" />
                pika206@gmail.com
              </a>
              </li>
            <li>
              <a href="https://www.linkedin.com/in/patrick-cheung206/">
                <img className="icon" src="images/icons/LI-In-Bug.png" alt="LinkedIn" />in/patrick-cheung206/
              </a>
            </li>
            <li>
              <a href="https://github.com/thepika206">
                <img className="icon" src="images/icons/github-mark.png" alt="GitHub" />thepika206
              </a>
            </li>
            <li>
              <img src="https://www.codewars.com/users/thepika206/badges/small
              " alt="codewars badge" />
            </li>
          </ul>
        </div>
      </div>      
      <ContactForm/>
      {
        props.joke
        ? <JokeCard joke={props.joke} />
        :<></>
      }
      <div className="">
        <a href="https://icons8.com/license">icons credited to icons8.com</a>
      </div>
    </>
  )
}
  
export default Contact