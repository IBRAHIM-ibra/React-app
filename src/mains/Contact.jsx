import { useState,useEffect,useRef} from "react";
import '../styles/Contact.css'
import Logo2 from '../images/logo2.png';

export default function Contact() {
    
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submited")

    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';

  };

    return (
        <div className="contact-container">
          <div className="contact-form">
            <div className="contact-information2">
            <img src={Logo2} alt="LOGO" className="contact-Logo2" />
            <h2>We’d love to hear from you</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" ref={nameRef}required />
              </div>
    
              <div className="form-group">
                <label>Email</label>
                <input type="email" ref={emailRef} required />
              </div>
    
              <div className="form-group">
                <label>Message</label>
                <textarea rows="6" ref={messageRef} required></textarea>
              </div>
    
              <button type="submit" >Send Message</button>
            </form>
          </div>
        </div>
      );
    }     