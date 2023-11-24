import { useState } from "react";

import { NavBar, Header } from "./index";
import { renderDisplayAsSet } from "../../helpers/forDashboard.jsx";

function Dashboard() {
  const [display, setDisplay] = useState(null);
  return (
    <>
      <Header />
      <main className="main-grid" id="dashboard">
        <NavBar setDisplay={setDisplay} />
        {renderDisplayAsSet(display)}
      </main>
    </>
  );
}
export default Dashboard;
