import { Routes, Route } from "react-router-dom";
import { Dashboard} from "./components/dashboard/index";
import "./App.css";
import AboutPage from "./components/aboutPage.jsx/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
          {/* <Route path="/project/:id" element={<ProjectPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
