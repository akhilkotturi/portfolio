import './styles/App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

function HomePage() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
