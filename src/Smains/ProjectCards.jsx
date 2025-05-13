
import '../secondryStyle/ProjectCards.css'


function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-images">
      <img src={project.image} alt={project.title} className='project-image' />
      </div>
      <div className="project-informations">
      <h3 className='project-informations-title'>{project.title} </h3>
      <p>"{project.shortDescription}"</p>
      <button className="see-more-button">Voir plus →</button>

      
      </div>
    </div>
  );
}

export default ProjectCard;
