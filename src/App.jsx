import './App.scss';
import Home from './components/hero/hero.jsx';
import Header from "./components/header/header.jsx";
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/projects.jsx';
import Skills from './components/skills/skills.jsx';


function App() {
  useEffect(() => {
    document.title = 'Portfolio';
      }, []);
  
  return (
    <div className='App'>
      {/* <Routes>
        <Route index element={<Home />} />
        <Route path = '/Home' element = {<Home />}/>
      </Routes> */}
      <Home />
      <Skills />  
      <Projects />
    </div>
  );
}

export default App;
