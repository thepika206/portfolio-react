import { techSkillsData } from '../data/techSkills';

const skillDisplayPriority = {
  'React.js': 1,
  JavaScript: 2,
  TypeScript: 3,
  'Node.js': 4,
  'Express.js': 5,
  AWS: 6,
  'MongoDB / Mongoose': 7,
  PostgreSQL: 8,
  'Payload CMS': 9,
  Cypress: 10,
  'Claude AI': 11,
  PostMan: 12,
  HTML5: 13,
  CSS: 14,
  Python3: 98,
  Django: 99,
};

const TechSkillsCard = () => {
  const sortedSkills = [...techSkillsData]
    .map((skill, index) => ({ skill, index }))
    .sort((a, b) => {
      const aPriority = skillDisplayPriority[a.skill.title] ?? 50;
      const bPriority = skillDisplayPriority[b.skill.title] ?? 50;

      if (aPriority !== bPriority) {
        return aPriority - bPriority;
      }

      return a.index - b.index;
    })
    .map(({ skill }) => skill);

  return (
    <section className='card home-card home-panel-card p-4 shadow'>
      <div className='card-body'>
        <h2 className='card-title home-panel-title mb-3'>Technologies</h2>
        <div className='skills-grid'>
          {sortedSkills.map((skill) => (
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
