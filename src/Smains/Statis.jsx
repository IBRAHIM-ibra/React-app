import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../secondryStyle/Statis.css';

const statsData = [
  { id :1, label: "Jeunes mobilisés", value: "+1000 étudiants" },
  { id :2, label: "Projets développés", value: "+40 projets" },
  { id :3, label: "Bénéficiaires impactés", value: "+500 personnes" },
  { id :4, label: "Heures de formations", value: "+3000 heures" },
  { id :5, label: "Objectifs de développement durable", value: "13 ODD" },
];

export default function Statis() {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const section = document.getElementById("stats");

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
    <section className="stats-section" id="stats">
      {statsData.map((stat) => (
        <motion.div
          className="stat-card"
          key={stat.id}
          initial={{ opacity: 0, x: -200 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ duration: 1}}
        >
          <h3 className="stat-value">{stat.value}</h3>
          <p className="stat-label">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}

