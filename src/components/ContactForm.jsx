import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatusMessage('Sending...');

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      );

      setStatusMessage('Message sent, thank you.');
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatusMessage('Message failed to send. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className='card p-4 contact-card shadow'>
      <div className='card-body'>
        <h2 className='card-title mb-3'>Send a Message</h2>
        <form className='contact-form' ref={form} onSubmit={sendEmail} action=''>
          <label htmlFor='user_name'>Name</label>
          <input
            id='user_name'
            type='text'
            name='user_name'
            required
            placeholder='Your name'
          />
          <label htmlFor='user_email'>Email</label>
          <input
            id='user_email'
            type='email'
            name='user_email'
            required
            placeholder='you@example.com'
          />
          <label htmlFor='form_message'>Message</label>
          <textarea id='form_message' name='message' required placeholder='How can I help?' />
          <button className='mt-3 btn btn-dark' type='submit' disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>

          {statusMessage && <p className='contact-status-message mt-3 mb-0'>{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
