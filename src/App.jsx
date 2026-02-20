import { Routes, Route } from 'react-router-dom';
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
