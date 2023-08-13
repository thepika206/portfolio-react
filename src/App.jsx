import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import NavBar from './components/NavBar';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import { workExperienceData } from './data/workExperience';
import { getRandomJoke } from './services/chuckNorrisService';
import { useState, useEffect } from 'react';


function App() {
  const isDownloadableResume = false
  const [joke, setJoke] = useState({})
  useEffect(() => {
    const fetchRandomJokeData = async() => {
      const randomJokeData = await getRandomJoke()
      setJoke(randomJokeData)
    }
    fetchRandomJokeData()
  },[])

  return (
    <>
      <NavBar />
        <main className='d-flex flex-column  align-items-center'>
      <Routes>
        <Route path='/' element={<Home 
        />} />
        <Route path='/contact' element={<Contact 
          joke = {joke}
        />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume 
          workExperience={workExperienceData}
          isDownloadableResume={isDownloadableResume}
        />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
      </Routes>
        </main>
    </>
  );
}

export default App;
