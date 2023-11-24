import { About } from "../components/dashboard";
import Projects from '../components/dashboard/projects/Projects.jsx'

const renderDisplayAsSet = (state) => {
    if (state === null) {
      return <section className="section-container"><p>loading...</p></section>;
    }

    if (state === "display-projects") {
      return <Projects />;
    }
    
    if (state === "display-about-me") {
      return <About />;
    }
  };

  const toggleDisplay = (e, stateSetter) => {
    stateSetter(e.currentTarget.value);
  };



  export {renderDisplayAsSet, toggleDisplay}