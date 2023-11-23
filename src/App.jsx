import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

function App() {
  const [display, setDisplay] = useState(null);

  const toggleDisplay = (e) => {
    setDisplay(e.currentTarget.value);
    console.log(display)
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
    <header className="main-grid">
      <img className='fill round-container absolute-top-right' src="src\assets\IMG_20231122_180703.jpg"/>
      <section className="rectangular-container title-container">
        <h1>Hi there! I'm Chloé, <br></br> a junior software developer</h1>
        {/* I'll change the img later, that one's just for trying things out */}
      </section>
    </header>
      <main className="main-grid" id="dashboard">
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
        {/* <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes> */}
      </main>
    </>
  );
}

export default App;
