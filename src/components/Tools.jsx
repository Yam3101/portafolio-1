import "./components.css"

function Tools() {
  return (
    <div className="container-tools">
        <div className="card-tool">
            <div className="container-head-card">
                <img width={50} src="/htmlLogo.png" alt="html" />
                <h4 className="title-tool"><span className="htmlTxt">HTML5</span></h4>
            </div>
            <div className="experience-cont">
                <h5 className="experience-text">Experience: 2 years</h5>
                <div className="experience-bar-high"><span className="bar-text"></span></div>
            </div>
        </div>
        <div className="card-tool">
            <div className="container-head-card">
                <img width={50} src="/cssLogo.png" alt="cssLogo" />
                <h4 className="title-tool"><span className="htmlTxt">CSS3</span></h4>
            </div>
            <div className="experience-cont">
                <h5 className="experience-text">Experience: 2 years</h5>
                <div className="experience-bar-too-high"><span className="bar-text"></span></div>
            </div>
        </div>
        <div className="card-tool">
            <div className="container-head-card">
                <img width={50} src="/javascriptLogo.png" alt="jsLogo" />
                <h4 className="title-tool"><span className="htmlTxt">JavaScript</span></h4>
            </div>
            <div className="experience-cont">
                <h5 className="experience-text">Experience: 1 year</h5>
                <div className="experience-bar-mid"><span className="bar-text"></span></div>
            </div>
        </div>
        <div className="card-tool">
            <div className="container-head-card">
                <img width={50} src="/phpLogo.png" alt="phpLogo" />
                <h4 className="title-tool"><span className="htmlTxt">PHP</span></h4>
            </div>
            <div className="experience-cont">
                <h5 className="experience-text">Experience: &#x3C; 1 year</h5>
                <div className="experience-bar-low"><span className="bar-text"></span></div>
            </div>
        </div>
        <div className="card-tool">
            <div className="container-head-card">
                <img width={50} src="/javaLogo.png" alt="javaLogo" />
                <h4 className="title-tool"><span className="htmlTxt">Java</span></h4>
            </div>
            <div className="experience-cont">
                <h5 className="experience-text">Experience: 1 year</h5>
                <div className="experience-bar-mid"><span className="bar-text"></span></div>
            </div>
        </div>
    </div>
  )
}

export default Tools