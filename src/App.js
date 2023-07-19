import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/Navbars";
import NavRoute from "./routes/NavRoute";

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <div className="container mt-4">
          <NavRoute />
        </div>
      </div>
    </Router>
  );
};

export default App;
