import './App.scss';
import Home from './components/hero/hero.jsx';
import Header from "./components/header/header.jsx";
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
      }, []);
  
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path = '/Home' element = {<Home />}/>
        
      </Routes>
    </div>
  );
}

export default App;
