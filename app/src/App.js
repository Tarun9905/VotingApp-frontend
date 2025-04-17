import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./Home";
import VotingPage from "./Voting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vote" element={<VotingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
