import React from "react";
import evenements from "../Smains/EvenementsData";
import { motion } from "framer-motion";
import "../styles/Events.css";

const colors = [
  "var(--card-white)",
  "var(--card-light-grey)",
  "var(--card-warm-grey)",

];

function getColorByIndex(index) {
  return colors[index % colors.length];
}
function Events() {
  return (
    <div className="evenements-page">
      <h2 className="section-title">Nos Événements</h2>
      <div className="scroll-container">
        {evenements.map((event, index) => (
          <motion.div
            className="event-card"
            key={event.id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: getColorByIndex(index),
            }}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}



export default Events;