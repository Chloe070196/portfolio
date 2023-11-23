import { Routes, Route } from "react-router-dom";
import { Dashboard, Header } from "./components/dashboard/index";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>*/}
      </Routes>
    </>
  );
}

export default App;
