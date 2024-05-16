import "./components.css"

function NavBar() {
  const linkGit = () => {
    window.location.href = "https://github.com/Yam3101";
  }
  const linkX = () => {
    window.location.href = "https://twitter.com/Yam_3101";
  }

  const handleMouseEnter = () => {
    document.body.style.cursor = 'pointer';
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = 'default';
  };

  return (
    <>
        <nav className="container-nav-info">
            <div className="container-logo">
                <img width={50} src="/faviconYam.svg" alt="logo" />
                <h1 className="nav-title">YAM&apos;S PROJECTS</h1>
                <h1 className="nav-title-2">YAM&apos;S</h1>
            </div>
            <div className="contact-logos">
                <img width={40} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={linkGit} src="/github.svg" alt="GitHub" className="git-logo"/>
                <img width={40} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src="/discord.svg" alt="Discord" className="disc-logo"/>
                <img width={40} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={linkX} src="/twitter.svg" alt="Twitter" className="twt-logo"/>
            </div>
        </nav>
    </>
  )
}

export default NavBar
