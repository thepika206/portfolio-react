import { techSkillsData } from "../data/techSkills";
const TechSkillsCard = () => {
  return (  
    <div className="card home-card p-3 shadow" >
      <div className="card-body">
        <h3 className="card-title">Technologies</h3>
        <div className="flex-row-container">{techSkillsData.map(skill =>
            <div className="" key={skill.title}>{skill.svg}</div>
          )}
        </div>
      </div>
      <div className="card-footer text-muted">
        <a href="https://icons8.com/license">used with permission from icons8.com</a>
      </div>
    </div>
  )
}
export default TechSkillsCard;

//https://icons8.com/license