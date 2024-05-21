import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(event) {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  }
  
  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if  (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div id='contactDiv'>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="10" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}