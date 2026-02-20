import './styles/App.css';
import Nav from './Components/Nav';
import ProjectHeader from './Components/ProjectHeader';
import Footer from './Components/Footer';
import Projects from './Components/Projects/Projects';
import TopButton from './Components/TopButton';

function ProjectsPage() {
  return (
    <div className="App">
      <Nav />
      <ProjectHeader />
      <Projects />
      <Footer />
      <TopButton />
    </div>
  );
}

export default ProjectsPage;
