import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ScrollToTop from './Components/ScrollToTop';
import StarField from './Components/StarField';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      {theme === 'dark' && <StarField />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />} />
        <Route path="projects" element={<ProjectsPage theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />} />
      </Routes>
    </div>
  );
}

export default App;
