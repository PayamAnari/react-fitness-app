import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import sendEmail from '../../utils/sendEmail';

import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmailHandler = (e) => {
    e.preventDefault();

    sendEmail(form.current)
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <section id="contact" className="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>

      <div className="container  contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="option-icon" />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:anari.p62@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="option-icon" />
            <h4>Messenger</h4>
            <h5>Gym Fitness</h5>
            <a href="https://m.me/payam.anari">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="option-icon" />
            <h4>WhatsApp</h4>
            <h5>+31684442367</h5>
            <a href='https://web.whatsapp.com/send?phone"="+31684954443'>
              Send a message
            </a>
          </article>
        </div>
        <form id="contact-form" ref={form} onSubmit={sendEmailHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
          {messageSent && (
            <div className="message-sent">Your message has been sent!</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
