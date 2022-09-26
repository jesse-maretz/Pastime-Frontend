import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import LeagueCards from "./components/LeagueCards";
import LiveTeam from "./pages/LiveTeam";

function App() {

return (
  <>
    <Nav />
    <Routes>
      <Route 
        path="/"
        element={<Home />}
      />
      <Route 
        path="/teams"
        element={<LeagueCards />}
      />
      <Route
        path="/teams/:Name"
        element={<LiveTeam />}
      />
      
    </Routes>
  </>
  )
}

export default App;