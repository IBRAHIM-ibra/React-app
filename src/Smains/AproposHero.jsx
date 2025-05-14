import React from 'react';
import '../styles/Apropos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AproposHero() {
  return (
    <div className="fuzzy-overlay-container">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
}

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{ transform: "translateX(10%) translateY(10%)" }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror"
      }}
      className="fuzzy-overlay"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="Apropos-Hero-content">
      <p className="Apropos-main-title">À propos de notre club</p>
      <p className="Apropos-sub-title">
        Nous sommes un club dynamique dédié à l'impact social, à l'innovation et à l'engagement des étudiants. Rejoignez-nous pour construire un avenir meilleur ensemble.
      </p>
      <div className="Apropos-button-container">
        <Link to="/Events">
          <button className="Apropos-pricing-button">Voir nos événements</button>
        </Link>
        <Link to="/Projetcs">
         <button className="Apropos-pricing-button">Découvrir nos projets</button>
        </Link>

      </div>
    </div>
  );
};

export default AproposHero;

