import React from "react";
import projectData from "../Smains/projectData";
import ProjectCards from "../Smains/ProjectCards";
import "../styles/project.css";

function ProjectsPage() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Nos Projets</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCards key={project.id} project={project} />
        ))}
      </div>
    </div>
   
  );
}

export default ProjectsPage;
