import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from "./components/LandingPage"; // Updated landing page
import CodeEditor from "./components/CodeEditor"; // Your code editor component
import SupportPage from './components/SupportPage';

import Arena from './components/Arena';
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/components/Main/Home";
import Problem from "./components/components/Problem/Problem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/playground" element={<CodeEditor />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/arena" element={<Arena />} /> 

          <Route exact path="/home" element={<Home />} />
          <Route path="/problem/:id" element={<Problem />} />

      </Routes>
    </Router>
  );
}

export default App;
