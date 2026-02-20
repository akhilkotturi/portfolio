import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
