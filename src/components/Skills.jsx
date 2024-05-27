import "./components.css";

function Skills() {
	return (
		<div className="mt-8 grid items-center gap-2 sm:flex font-DMsans">
			<div
				className="p-5 border border-white flex items-center justify-between gap-10"
				id="skill-1"
			>
				<img width={40} src="/teamSkill.svg" alt="team" /> Work Team
				Adaptability
			</div>
			<div
				className="p-5 border border-white flex items-center justify-between gap-10"
				id="skill-2"
			>
				<img width={40} src="/microsoftSkill.svg" alt="microsoft" /> Microsoft
				and Office Tools
			</div>
			<div
				className="p-5 border border-white flex items-center justify-between gap-10"
				id="skill-3"
			>
				<img width={40} src="/learnSkill.svg" alt="learn" /> Quick and Efficent
				Learner
			</div>
		</div>
	);
}

export default Skills;
