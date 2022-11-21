import { techSkillsData } from "../data/techSkills";
const TechSkillsCard = () => {
  return (  
    <div className="card m-3" >
      <div className="card-body">
        <h3 className="card-title">Technologies</h3>
          <ul>{techSkillsData.map(skill =>
              <li className="fs-5" key={skill.title}>{skill.title}</li>
            )}
          </ul>
          <a href="/projects">
            <button className="btn btn-dark">View Projects</button>
        </a>
      </div>
    </div>
  )
}
export default TechSkillsCard;