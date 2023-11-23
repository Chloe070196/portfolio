import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./components/dashboard/index";

function App() {
  return (
    <>
      <header className="main-grid">
        <img
          className="fill round-container absolute-top-right"
          src="src\assets\IMG_20231122_180703.jpg"
        />
        <section className="rectangular-container title-container">
          <h1>
            Hi there! I'm Chloé, <br></br> a junior software developer
          </h1>
          {/* I'll change the img later, that one's just for trying things out */}
        </section>
      </header>
      <Dashboard />
      {/* <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes> */}
    </>
  );
}

export default App;
