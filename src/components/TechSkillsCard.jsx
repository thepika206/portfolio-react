import { techSkillsData } from '../data/techSkills';
const TechSkillsCard = () => {
  return (
    <section className='card home-card home-panel-card p-4 shadow'>
      <div className='card-body'>
        <h2 className='card-title home-panel-title mb-3'>Technologies</h2>
        <div className='skills-grid'>
          {techSkillsData.map((skill) => (
            <div className='skill-tile' key={skill.title}>
              <div className='skill-icon-frame'>{skill.svg}</div>
              <p className='skill-label'>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechSkillsCard;

//https://icons8.com/license
