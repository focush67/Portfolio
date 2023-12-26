import './App.css';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <Navigation/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
