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
                <h5 className="experience-text">Experience:</h5>
                <div className="experience-bar-html"><span className="bar-text">HIGH KNOWLEDGE</span></div>
            </div>
        </div>
        <div className="card-tool">
            <h4 className="title-tool">CSS3</h4>
        </div>
        <div className="card-tool">
            <h4 className="title-tool">JavaScript</h4>
        </div>
        <div className="card-tool">
            <h4 className="title-tool">Java</h4>
        </div>
        <div className="card-tool">
            <h4 className="title-tool">PHP</h4>
        </div>
    </div>
  )
}

export default Tools