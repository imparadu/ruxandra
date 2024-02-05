import Navigation from '../navigation/Navigation';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5eo6rnr',
        'template_d0g3j9a',
        form.current,
        process.env.EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div>
      <Navigation />
      <div className={styles.containerComponentaContact}>
        <div id={styles.containerFormulare}>
          <h3>Get in touch:</h3>
          {/* <p>are mult mai mult sens</p>  */}
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.inputDiv}>
              <label htmlFor="name"></label>
              <input
                type="text"
                id={styles.name}
                name="from_name"
                placeholder="Name:"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id={styles.email}
                name="email"
                placeholder="Email:"
              />
              <label htmlFor=""></label>
              <textarea
                type="text"
                id={styles.message}
                name="message"
                placeholder="Message:"
              />
              <input type="submit" value="Send" id={styles.submit} />
            </div>
          </form>
          <p>Or send email at chocolatechiphelmet@gmail.com</p>
        </div>
        <div className={styles.containerPozaContact}>
          <img src="/portfolio/field.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
