import React from 'react';
import '../styles/Footer.css';
import logo from '../images/logo.png';
import linkeDinLogo from '../images/linkedin.png';
import instagramLogo from '../images/instagram.png';
import twitterLogo from '../images/twitter.png';
import tiktokLogo from '../images/tiktok.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="information">
          <img src={logo} alt="LOGO" className="logo" />
          <h6 className='meaning'><span>Enactus</span> = <span>En</span>trepreneuriat + <span>Act</span>ion + <span>Us</span></h6>
          <h6 className='motivation'>Chez Enactus, chaque idée compte.</h6>
          <p className="footer-description">
            Nous inspirons les étudiants à innover, à collaborer et à entreprendre pour construire un avenir meilleur.
          </p>
        </div>

        <div className="social-media">
          <h3 className="footer-subtitle">Suivez-nous</h3>
          <div className="social-icons">
            <a href=" https://www.linkedin.com/company/enactus-fsbmc/" target='_blank'><img src={linkeDinLogo} alt="facebook" className='linkedin'  /></a>
            <a href=" https://www.instagram.com/3nac1us.fsbm?igsh=YWcyaGQyOGMzNzJo" target='_blank'><img src={instagramLogo} alt="instagram" className='instagram' /></a>
            <a href="#"><img src={twitterLogo} alt="twitter" className='twitter' /></a>
            <a href=" https://www.tiktok.com/@enactus.fsbmposting" target='_blank'><img src={tiktokLogo} alt="youtube" className='tiktok'  /></a>
          </div>
        </div>

        <div className="Nav-contact">
          <h3 className="footer-subtitle">Contact</h3>
          <ul>
            <li>Email : enactus24.25fsbm@gmail.com</li>
            <li>Tél : Team leader +212 639 380 894 / head of partnership</li>
            <li>Adresse : Enactus FSBM, Faculté des Sciences Ben M'Sick -<br/> Bd Commandant Driss Al Harti, Casablanca 20670 - Maroc XYZ</li>
          </ul>
        </div>
      </div>
      <br />
      <hr />
      <div className="footer-bottom">
        © {new Date().getFullYear()} Enactus. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;



