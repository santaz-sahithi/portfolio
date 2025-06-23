import './App.scss';
import Home from './components/hero/hero.jsx';
import { useEffect } from 'react';
import Projects from './components/projects/projects.jsx';
import Skills from './components/skills/skills.jsx';
import ContactForm from './components/contactfold/contactfold.jsx';


function App() {
  useEffect(() => {
    document.title = 'Portfolio';
      }, []);
  
  return (
    <div className='App'>
      <Home />
      <Skills />  
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
