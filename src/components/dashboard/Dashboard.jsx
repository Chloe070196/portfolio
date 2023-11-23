import { useState } from "react";

import { NavBar } from "./index";
import { renderDisplayAsSet } from "../../helpers/forDashboard.jsx";

function Dashboard() {
  const [display, setDisplay] = useState(null);
  return (
    <>
      <main className="main-grid" id="dashboard">
        <NavBar setDisplay={setDisplay} />
        <section>{renderDisplayAsSet(display)}</section>
      </main>
    </>
  );
}
export default Dashboard;
