export default function ProjectCard1({ card }) {
  return (
    <>
      <div id={`project-card1`} className="project-card rectangular-container">
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </>
  );
}
