import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import '../secondryStyle/Desc.css';

export default function Desc() {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const section = document.getElementById("description");
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <motion.section
      id="description"
      className="home-description"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -200 }}
      transition={{ duration: 1 }}
    >
      <h2 className="desc-title">Enactus, un réseau d’impact</h2>

      <p className="desc-text">
        <span className="highlight">Enactus</span> est un réseau mondial qui inspire les jeunes à devenir 
        des acteurs du changement à travers <span className="highlight">l’entrepreneuriat</span>. 
        <span className="highlight">Enactus Maroc</span>, fondé en 2003, accompagne les étudiants dans 
        la réalisation de projets innovants et à fort impact social au sein de leurs communautés.
      </p>

      <blockquote className="desc-quote">
        "Entreprendre pour un avenir meilleur."
      </blockquote>
    </motion.section>
  );
}
