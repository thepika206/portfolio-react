import './contact.css';
import ContactForm from '../../components/ContactForm';

function Contact() {
  return (
    <section className='contact-shell'>
      <header className='contact-hero'>
        <p className='projects-eyebrow'>Let&apos;s Connect</p>
        <h1>Contact</h1>
        <p className='contact-intro'>
          I&apos;m always open to discussing front-end work, collaboration, and product ideas.
        </p>
      </header>

      <div className='contact-grid'>
        <section id='contact-info-card' className='card p-4 contact-card shadow'>
          <div className='card-body'>
            <h2 className='card-title mb-3'>Connect with Me</h2>
            <ul>
              <li>
                <a href='mailto:pika206@gmail.com'>
                  <img className='icon' src='images/icons/icons8-mail-50.png' alt='email' />
                  <span>pika206@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/patrick-cheung206/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img className='icon' src='images/icons/LI-In-Bug.png' alt='LinkedIn' />
                  <span>in/patrick-cheung206/</span>
                </a>
              </li>
              <li>
                <a href='https://github.com/thepika206' target='_blank' rel='noopener noreferrer'>
                  <img className='icon' src='images/icons/github-mark.png' alt='GitHub' />
                  <span>thepika206</span>
                </a>
              </li>
              <li className='codewars-row'>
                <img
                  src='https://www.codewars.com/users/thepika206/badges/small'
                  alt='Codewars badge'
                />
              </li>
            </ul>
          </div>
        </section>

        <ContactForm />
      </div>

      <footer className='contact-footer-note'>
        <a href='https://icons8.com/license' target='_blank' rel='noopener noreferrer'>
          Icons credited to icons8.com
        </a>
      </footer>
    </section>
  );
}

export default Contact;
