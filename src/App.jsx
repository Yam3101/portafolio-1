import "./App.css";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<div className="pt-16 grid place-items-center justify-center">
				<h1 className="my-name-animation font-teachers text-2xl font-medium">
					ANGEL YAM
				</h1>
				<div className="flex flex-col animacion-major">
					<div className="grid text-center">
						<h1 className="text-blue-600 font-bold text-5xl font-reem">
							FRONT-END DEVELOPER STUDENT
						</h1>
					</div>
				</div>
				<div className="grid place-content-center">
					<div className="bg-blue-600 h-2 back-color-animated mt-2">
						{/* GhostDivForLine */}
					</div>
					<div className="textWidth p-5 text-center font-DMsans text-about-animated">
						My name is Angel Yam, I&apos;m a Front-End Engineering Student, I
						have knowledge on UI development, Front-End Tools, B1 English Level
						and many experience on work team projects.
					</div>
				</div>
				<Skills />
				<div className="grid justify-center place-items-center">
					<h3 className="animated-dev-tools m-o mt-14 text-center font-reem text-4xl font-bold">
						DEVELOPMENT TOOLS AND SOFTWARE
					</h3>
					<Tools />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
