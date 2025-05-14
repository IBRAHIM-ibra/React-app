import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../secondryStyle/Team.css';
import Youssef from "../../public/Members/younes.png";
import Maryam from "../../public/Members/maryam.png";
import Wiam from "../../public/Members/wiam.png";
import Ammar from "../../public/Members/ammar.png";
import Hind from "../../public/Members/hind.png";
import Abdlwadod from "../../public/Members/abdelwadoud.png";
import Basma from "../../public/Members/basma.png";
import Imane from "../../public/Members/imane.png";

export default function Team() {
  return (
    <motion.section
      className="tree"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x:  0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="tree-title">Structure de l'équipe</h2>
      <div className="tree-container">
        <div className="tree-level">
          <div className="tree-card">
            <img src={Youssef} alt="Younes TAOUMI" />
            <h4>Younes TAOUMI</h4>
            <p>Team Leader</p>
          </div>
        </div>

        <div className="tree-level">
          <div className="tree-card">
            <img src={Maryam} alt="Maryam BADRI" />
            <h4>Maryam BADRI</h4>
            <p>Vice Team Leader</p>
          </div>
          <div className="tree-card">
            <img src={Wiam} alt="Wiam ABOUTARA BELRHITI" />
            <h4>Wiam ABOUTARA BELRHITI</h4>
            <p>Vice President Project</p>
          </div>
        </div>

        <div className="tree-level">
          <div className="tree-card">
            <img src={Ammar} alt="Ammar MASSAOUDI" />
            <h4>Ammar MASSAOUDI</h4>
            <p>Communication Manager</p>
          </div>
          <div className="tree-card">
            <img src={Hind} alt="Hind ZAKY" />
            <h4>Hind ZAKY</h4>
            <p>Human Ressources Manager</p>
          </div>
          <div className="tree-card">
            <img src={Abdlwadod} alt="Abdelwadoud EL BAROUJI" />
            <h4>Abdelwadoud EL BAROUJI</h4>
            <p>Treasurer</p>
          </div>
        </div>

        <div className="tree-level">
          <div className="tree-card">
            <img src={Basma} alt="Basma JAWHAR" />
            <h4>Basma JAWHAR</h4>
            <p>Event Manager</p>
          </div>
          <div className="tree-card">
            <img src={Imane} alt="Imane OUAZZANI CHAHDI" />
            <h4>Imane OUAZZANI CHAHDI</h4>
            <p>Head of Partnerships</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
