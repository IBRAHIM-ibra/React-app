import { useState,useRef,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import '../secondryStyle/Hero.css'
import HeroImage from '../images/ClubImages/image2.jpg'


export default function Hero() {

  const navigate = useNavigate();
  
  const HandlClick = () => {
      navigate('/Join');
  }

  return (
    
      <motion.section className="hero-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      >
      <div className="hero-text">
      <span className="hero-subtitle">Agir, Innover, Inspirer</span>
      <h3 className="hero-title">Nous ne rêvons pas d’un monde meilleur. Nous le construisons.</h3>
      <p className="hero-description">
      Notre club est un espace d’action, d’idées et de collaboration. Si toi aussi tu veux passer à l’action, tu es au bon endroit.
      </p>
      <button className="hero-button" onClick={HandlClick}>Rejoindre l'aventure</button>
      </div>

      <div className="hero-images">
        <img src={HeroImage} alt="Club Image" className="hero-image" />
      </div>


    
    
    </motion.section>


  );
}








  


