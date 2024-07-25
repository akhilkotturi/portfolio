import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
