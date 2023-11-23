import { toggleDisplay } from "../../helpers/forDashboard";

export default function NavBar({ setDisplay }) {
  return (
    <>
      <nav className="section-container">
        <button
          className="rectangular-container"
          value="display-projects"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>projects</h2>
        </button>
        <button
          className="rectangular-container"
          value="display-tech-stack"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>tech stack</h2>
        </button>
        <button
          className="rectangular-container"
          value="display-about-me"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>about me</h2>
        </button>
      </nav>
    </>
  );
}
