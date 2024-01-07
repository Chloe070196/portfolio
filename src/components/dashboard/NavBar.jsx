import { toggleDisplay } from "../../helpers/forDashboard";

export default function NavBar({ setDisplay }) {
  return (
    <>
      <nav className="section-container">
        <div className="rectangular-container tech-stack">
          <h2>TECH STACK</h2>
          <h4>Language</h4> 
          <h3>JS</h3>
          <h4>Frameworks</h4> 
          <h3> React + Vite</h3>
          <h4>Libraries</h4> 
          <h3>Tailwind</h3>
          <h4>IDE</h4> 
          <h3>GitHub/ Git, VSCode</h3>
          <h4>Workflow</h4> 
          <h3>Agile/ SCRUM, TDD</h3>
        </div>
        <button
          className="rectangular-container nav"
          value="display-projects"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>PROJECTS</h2>
        </button>
        <button
          className="rectangular-container nav"
          value="display-about-me"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>ABOUT</h2>
        </button>
      </nav>
    </>
  );
}
