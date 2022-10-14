import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}

export default App;
