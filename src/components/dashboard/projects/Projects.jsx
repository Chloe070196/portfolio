import { ProjectCard } from './projectCards/index.js'
import { cards } from '../../../../db/project_cards.js'

export default function Projects() {
  return (
    <section id="display-projects" className="section-container">
      {cards.map((card, index) => (
        <ProjectCard key={index + 'projectCard'} card={card}/>
      ))}
    </section>
  );
}
