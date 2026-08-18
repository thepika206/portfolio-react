import HomeCard from '../../components/HomeCard';
import './home.css';
import TechSkillsCard from '../../components/TechSkillsCard';
import BioCard from '../../components/BioCard';
import Resume from '../Resume/Resume';

function Home() {
  return (
    <section className='home-shell'>
      <div id='home-container' className='home-content-grid'>
        <HomeCard />
        <TechSkillsCard />
        <BioCard />
      </div>
      <section className='home-experience-section'>
        <Resume isDownloadableResume={false} />
      </section>
    </section>
  );
}

export default Home;
