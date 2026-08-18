import { Link } from 'react-router-dom';
import homeHeroData from '../data/homeHero.json';

const HomeCard = () => {
  return (
    <section className='card p-4 home-card home-hero-card shadow'>
      <div className='card-body hero-card-body'>
        <p className='hero-eyebrow'>Front-End Developer</p>
        <h1 id='home-title' className='home-hero-title'>
          👋 {"I'm Patrick"}
        </h1>
        <p className='home-hero-copy'>{homeHeroData.description}</p>

        <div className='hero-cta-row'>
          <Link to='/projects' className='btn btn-dark btn-lg shadow'>
            View Projects
          </Link>
          <Link to='/contact' className='btn btn-outline-dark btn-lg'>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
