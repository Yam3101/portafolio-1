import "./components.css";

function NavBar() {
	const linkGit = () => {
		window.location.href = "https://github.com/Yam3101";
	};
	const linkX = () => {
		window.location.href = "https://twitter.com/Yam_3101";
	};

	return (
		<>
			<nav className="bg-slate-50 text-black p-4 flex justify-between">
				<div className="flex gap-4 items-center">
					<img width={50} src="/faviconYam.svg" alt="logo" />
					<h1 className="font-reem font-bold text-3xl m-0 hidden sm:flex">
						YAM&apos;S PORTFOLIO
					</h1>
					<h1 className="font-reem font-bold text-3xl m-0 flex sm:hidden">
						YAM&apos;S
					</h1>
				</div>
				<div className="flex gap-3 items-center">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<img
						width={40}
						onClick={linkGit}
						src="/github.svg"
						alt="GitHub"
						className="git-logo cursor-pointer"
					/>
					<img
						width={40}
						src="/discord.svg"
						alt="Discord"
						className="disc-logo cursor-pointer"
					/>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<img
						width={40}
						onClick={linkX}
						src="/twitter.svg"
						alt="Twitter"
						className="twt-logo cursor-pointer"
					/>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
