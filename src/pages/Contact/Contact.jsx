import './contact.css'
import JokeCard from '../../components/JokeCard'

function Contact(props){
  return (  
    <>
      <h1>Contact</h1>
      <div id="contact-info-card" className="card p-4 m-5 contact-card shadow">
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
      <div className="card p-4 m-5 contact-card shadow">
        <div className="card-body">
          <h3 className="card-title">Professional Journey</h3>
          <p>
            My career in tech started in Portland Oregon with supporting Insurance CRM, training, and implementing clients.  I gained a mastery and love for the business of software.  Then I took a role on the Product team and continued contributing to future capabilities of the software platform.  
          </p>
          <p>
            As a Product Owner, I exercised skills in agile project management, feature design, functional testing, and release management.   Later I continued to level up in UI/UX, product packaging and strategy, and handling all forms of communications.  Through it all, my highest appreciation was for engineers who produced the software. This led me to consider a major career change towards software engineering.
          </p> 
          <p>
            To validate my intentions in this career pivot, I interviewed several developers that I have worked with to gain additional perspective and brainstorm ideas for coding camps. During this time I began self-paced courses in web development in order to fully confirm that I would enjoy the challenge of coding. After 6 weeks of working full-time and teaching myself JavaScript basics at night, I felt confident to take the leap into Software Development.
          </p>
          <p>
            I enrolled in a 12-week full-time Software Engineering Immersive at General Assembly. My daily routine was a vigorous experience of long work days at the computer, coding, studying, planning, and presenting projects. I created many applications in JavaScript, React, along with other technologies.  However, the big picture of my experience was to become an excellent problem solver and systematic planner.
          </p>
          <p>
            Post Graduation, I continued to receive Professional support from General Assembly's coaches, to further prepare me for job-seeking, networking, and creating effective Portfolio materials. A typical day usually involves enhancing project features, researching a new technical skill, connecting with other professionals in my network, and reaching out to hiring managers about exciting opportunities.
          </p>
        </div>
      </div>
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