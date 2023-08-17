import emailjs from 'emailjs-com'
import { useRef } from 'react';

const ContactForm = () => {

  const form = useRef()
  
  const sendEmail = (e) =>{
    e.preventDefault()
    alert('Message sent, thank you')

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )

    e.target.reset()
  }

  return (  
    <div className="card p-4 m-5 contact-card  shadow">
        <div className='card-body'>
          <h3 className='card-title text-center mb-3'>Send a Message</h3>  
          <form className='contact-form' ref={form} onSubmit={sendEmail} action="">
            <label htmlFor="user_name">Name</label>
            <input id="user_name" type="text" name='user_name' required />
            <label htmlFor="user_email">Email</label>
            <input id="user_email" type="email" name='user_email' required />
            <label htmlFor="form_message">Message</label>
            <textarea id="form_message" name='message' required />
            <input className='mt-3 btn btn-dark' type="submit" value="Send" />
          </form>
        </div>
      </div>    
  )
}

export default ContactForm;