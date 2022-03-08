import React from 'react';
import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/index.js'
import ContactPage from './pages/contact.js'
import ProjectsPage from './pages/projects.js'
import ShinyPage from './pages/shiny.js'
import Team from './pages/team';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/contact" element={<ContactPage/>} exact />
        <Route path="/projects" element={<ProjectsPage/>} exact />
        <Route path="/shiny" element={<ShinyPage/>} exact />
        <Route path="/team" element={<Team/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
