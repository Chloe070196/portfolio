import { toggleDisplay } from "../../helpers/forDashboard";

export default function NavBar({ setDisplay }) {
  return (
    <>
      <nav className="section-container">
        <div className="rectangular-container tech-stack">
          <h2>tech stack : HTML, CSS, JS, React + Vite, GitHub/ Git, VSCode</h2>
        </div>
        <button
          className="rectangular-container nav"
          value="display-projects"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>things I've made so far</h2>
        </button>
        <button
          className="rectangular-container nav"
          value="display-about-me"
          onClick={(e) => toggleDisplay(e, setDisplay)}
        >
          <h2>about me</h2>
        </button>
      </nav>
    </>
  );
}
