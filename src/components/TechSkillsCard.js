// import { techSkillsData } from "../data/techSkills";
import CSSSVG from "./SVG/CSSSVG";
import DjangoSVG from "./SVG/DjangoSVG";
import ExpressSVG from "./SVG/ExpressSVG";
import GithubSVG from "./SVG/GithubSVG";
import HTML5 from "./SVG/HTMLSVG";
import JavaScriptSVG from "./SVG/JavaScriptSVG";
import MongoSVG from "./SVG/MongoSVG";
import NodeSVG from "./SVG/NodeSVG";
import PostgresSVG from "./SVG/PostgresSVG";
import PostmanSVG from "./SVG/PostmanSVG";
import PythonSVG from "./SVG/PythonSVG";
import ReactSVG from "./SVG/ReactSVG";
import TypeScriptSVG from "./SVG/TypeScriptSVG";
const TechSkillsCard = () => {
  return (  
    <div className="card home-card p-3 m-5 shadow" >
      <div className="card-body">
        <h3 className="card-title">Technologies</h3>
        <JavaScriptSVG/>
        <ReactSVG/>
        <TypeScriptSVG/>
        <HTML5/>
        <CSSSVG/>
        <PythonSVG/>
        <ExpressSVG/>
        <DjangoSVG/>
        <NodeSVG/>
        <MongoSVG/>
        <PostgresSVG/>
        <PostmanSVG/>
        <GithubSVG/>
        {/* <ul>{techSkillsData.map(skill =>
            <li className="fs-5" key={skill.title}>{skill.title}</li>
          )}
        </ul> */}
      </div>
      <div className="card-footer text-muted">
        <a href="https://icons8.com/license">used with permission from icons8.com</a>
      </div>
    </div>
  )
}
export default TechSkillsCard;

//https://icons8.com/license