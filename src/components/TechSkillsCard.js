import { techSkillsData } from "../data/techSkills";
const TechSkillsCard = () => {
  return (  
    <div className="card home-card p-3 shadow" >
      <div className="card-body">
        <h2 className="card-title text-center mb-3">Technologies</h2>
        <div className="flex-row-container justify-content-center">{techSkillsData.map(skill =>
            <div className="" key={skill.title}>{skill.svg}</div>
          )}
        </div>
      </div>
    </div>
  )
}
export default TechSkillsCard;

//https://icons8.com/license