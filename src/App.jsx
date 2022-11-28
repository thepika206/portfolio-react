import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import NavBar from './components/NavBar';
import ProjectDetails from './pages/ProjectDetails';
import { workExperienceData } from './data/workExperience';

function App() {
  return (
    <>
      <NavBar />
        <main className='d-flex flex-column justify-content-center align-items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume 
          workExperience={workExperienceData}
        />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
      </Routes>
        </main>
    </>
  );
}

export default App;
