import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

function App() {
  const [display, setDisplay] = useState(null);

  const toggleDisplay = (e) => {
    setDisplay(e.target.value);
  };

  const renderDisplayAsSet = () => {
    if (display === null) {
      return <p>loading...</p>;
    }

    if (display === "display-projects") {
      return <Projects />;
    }
    if (display === "display-tech-stack") {
      return <TechStack />;
    }
    if (display === "display-about-me") {
      return <About />;
    }
  };

  return (
    <>
      <section className="hero rectangular-container">
        <h1>Hi there! I'm Chloé, a junior software developer</h1>
        <div className='round-container'>
          <img src="./assets/IMG_20231122_180703.jpg"></img>
        </div>
      </section>
      <main id="dashboard">
        {/* toggles what is displayed in the view section */}
        <nav className="section-container">
          <button
            className="rectangular-container"
            value="display-projects"
            onClick={(e) => toggleDisplay(e)}
          >
            <h2>projects</h2>
          </button>
          <button
            className="rectangular-container"
            value="display-tech-stack"
            onClick={(e) => toggleDisplay(e)}
          >
            <h2>tech stack</h2>
          </button>
          <button
            className="rectangular-container"
            value="display-about-me"
            onClick={(e) => toggleDisplay(e)}
          >
            <h2>about me</h2>
          </button>
        </nav>
        <section>{renderDisplayAsSet()}</section>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
