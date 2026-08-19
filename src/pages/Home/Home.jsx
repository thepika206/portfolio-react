import HomeCard from '../../components/HomeCard';
import { Link } from 'react-router-dom';
import './home.css';
import TechSkillsCard from '../../components/TechSkillsCard';
import Resume from '../Resume/Resume';

function Home() {
  return (
    <section id='home-top' className='home-shell'>
      <div id='home-container' className='home-content-grid'>
        <HomeCard />
        <TechSkillsCard />
      </div>
      <section
        id='experience'
        className='home-experience-section'
        aria-labelledby='experience-heading'
      >
        <Resume />
      </section>

      <div className='home-back-to-top'>
        <Link to='/#home-top' className='btn btn-outline-dark shadow'>
          Back to Top
        </Link>
      </div>
    </section>
  );
}

export default Home;
