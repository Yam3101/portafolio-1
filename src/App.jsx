import './App.css'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Tools from './components/Tools'

function App() {
  return (
    <>
      <NavBar />
      <div className='presentation-text'>
        <h1 className='my-name'>ANGEL YAM</h1>
        <div className='cont-major'>
          <div className='major'>
            <h1 className='title-major'>FRONT-END DEVELOPER STUDENT</h1>
          </div>
        </div>
        <div className='container-info'>
          <div className='back-color-2'></div>
          <div className='text-about-me'>
            My name is Angel Yam, I&apos;m a Front-End Engineering Student, I have knowledge on UI development, 
            Front-End Tools, B2 English Level and many experience on work team projects.  
          </div>
        </div>
        <Skills />
        <div className="container-dev-tools">
          <h3 className='title-dev-tools'>DEVELOPMENT TOOLS AND SOFTWARE</h3>
          <Tools />
        </div>
      </div>
    </>
  )
}

export default App
