
import React from 'react';
import '../secondryStyle/AproposInfo.css';
import ApropoImage1 from "../images/ClubImages/image9.jpg"
import ApropoImage2 from "../images/ClubImages/image8.jpg"
import ApropoImage3 from "../images/ClubImages/image5.jpg"


const AproposInfo = () => {
   return (
    <section className="missions-section">
      <div className="missions-text">
        <h2 className="section-title">Notre Mission</h2>
        <p className="mission-description">
          Enactus FSBM a pour mission de mobiliser les étudiants pour devenir
          des leaders engagés en réalisant des projets innovants qui offrent
          des solutions durables aux défis sociaux et environnementaux.
        </p>

        <h3 className="section-subtitle">Réalisations</h3>
        <ul className="achievements-list">
          <li>Top 12 du Maroc</li>
          <li>Demi-finaliste 2023-2024</li>
          <li>Gagnant du prix <strong>Enactus Got Impact</strong></li>
        </ul>
      </div>

      <div className="missions-gallery">
        <img src={ApropoImage1} alt="Activité Enactus 1" />
        <img src={ApropoImage2} alt="Activité Enactus 2" />
        <img src={ApropoImage3} alt="Activité Enactus 3" />
      </div>
    </section>
  );
}


export default AproposInfo;



