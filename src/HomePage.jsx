import { lazy, Suspense } from 'react';
import './styles/App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import TopButton from './Components/TopButton';
import FeaturedProjects from './Components/Projects/FeaturedProjects';
import Experience from './Components/Experience/Experience';

const Scene3D = lazy(() => import('./Components/Scene3D'));

function HomePage() {
  return (
    <div className="App home-surface text-white">
      <Suspense fallback={null}><Scene3D /></Suspense>
      <Nav />
      <Header />
      <FeaturedProjects />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <TopButton />
    </div>
  );
}

export default HomePage;
