import "./components.css"

function Skills() {
  return (
    <div className='container-skills'>
        <div className="skills" id="skill-1">
            <img width={40} src="/teamSkill.svg" alt="team" /> Work Team Adaptability
        </div>
        <div className="skills" id="skill-2">
            <img width={40} src="/microsoftSkill.svg" alt="microsoft" /> Use of Microsoft and Office Tools
        </div>
        <div className="skills" id="skill-3">
            <img width={40} src="/learnSkill.svg" alt="learn" /> Quick and Efficent Learner
        </div>
    </div>
  )
}

export default Skills