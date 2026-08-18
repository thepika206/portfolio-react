import HomeCard from '../../components/HomeCard';
import './home.css';
import TechSkillsCard from '../../components/TechSkillsCard';
import BioCard from '../../components/BioCard';
import Resume from '../Resume/Resume';

function Home() {
  return (
    <>
      <div id='home-container'>
        <HomeCard />
        <TechSkillsCard />
        <BioCard />
      </div>
      <Resume isDownloadableResume={false} />
    </>
  );
}

export default Home;
