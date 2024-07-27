import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import './styles/App.css';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
