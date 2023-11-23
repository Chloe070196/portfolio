import { Projects, TechStack, About } from "../components/dashboard";

const renderDisplayAsSet = (state) => {
    if (state === null) {
      return <p>loading...</p>;
    }

    if (state === "display-projects") {
      return <Projects />;
    }
    if (state === "display-tech-stack") {
      return <TechStack />;
    }
    if (state === "display-about-me") {
      return <About />;
    }
  };

  const toggleDisplay = (e, stateSetter) => {
    stateSetter(e.currentTarget.value);
  };



  export {renderDisplayAsSet, toggleDisplay}