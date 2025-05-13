import { useEffect, useRef,useState } from 'react';
import '../styles/Join.css';
import Logo2 from '../images/logo2.png';

export default function Join() {

    const passwordTest = () => {
        let userPasswd = document.getElementById('password');
        let passMessage = document.getElementById('passCheck');
        if (userPasswd.value.length < 8) {
            passMessage.textContent = "YOUR PASSWORD IS WEAK";
            passMessage.style.color = 'red';
        }else {
            passMessage.textContent = "YOUR PASSWORD IS STRONG";
            passMessage.style.color = 'green';
        }

   
    }

      const emailRef = useRef(null);
      const codeOpogeRef = useRef(null);
      const cneRef = useRef(null);
      const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submited");


        emailRef.current.value = '';
        codeOpogeRef.current.value = '';
        cneRef.current.value = '';
        passwordRef.current.value = '';
      };

 

  return (
    
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-header">
          <img src={Logo2} alt="Club Logo" className="form-logo" />
          <h1>Join Our Club</h1>
          <p>Please fill in your personal information</p>
        </div>

        <div className="form-inputs">
          <div className="join-info">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input type="email" id="email" placeholder="ex: you@etu.univh2c.ma" ref={emailRef} required />
          </div>

          <div className="join-info">
            <label htmlFor="code">Code Apogée<span className="required">*</span></label>
            <input type="text" id="code"  ref={codeOpogeRef} placeholder="Your Code Apogée" required />
          </div>

          <div className="join-info">
            <label htmlFor="cne">CNE<span className="required">*</span></label>
            <input type="text" id="cne" placeholder="Your CNE" ref={cneRef} required />
          </div>

          <div className="join-info">
            <label htmlFor="password">Password<span className="required">*</span></label>
            <input type="password" id="password" placeholder="Choose a secure password" ref={passwordRef} onChange={passwordTest} required />
            <small className="password-hint" id='passCheck'>Minimum 8 characters</small>
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-btn" >Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
