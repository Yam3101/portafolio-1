import "./components.css"

export default function NavBar() {
  return (
    <>
        <nav className="container-nav-info">
            <div className="container-logo">
                <img width={50} src="/public/faviconYam.svg" alt="logo" />
                <h1 className="nav-title">YAM&apos;S PROYECTS</h1>
            </div>
            <div className="contact-logos">
                <a href=""><img width={40} src="/public/github.svg" alt="GitHub" className="git-logo"/></a>
                <a href=""><img width={40} src="/public/discord.svg" alt="Discord" className="disc-logo"/></a>
                <a href=""><img width={40} src="/public/twitter.svg" alt="Twitter" className="twt-logo"/></a>
            </div>
        </nav>
    </>
  )
}
