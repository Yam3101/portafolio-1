import './App.css'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <div className='pt-16 grid place-items-center justify-center'>
        <h1 className='my-name'>ANGEL YAM</h1>
        <div className='flex flex-col animacion-major'>
          <div className='major'>
            <h1 className='text-blue-600 font-bold text-6xl font-reem'>FRONT-END DEVELOPER STUDENT</h1>
          </div>
        </div>
        <div className='container-info'>
          <div className='back-color-2'></div>
          <div className='text-about-me p-5 text-center'>
            My name is Angel Yam, I&apos;m a Front-End Engineering Student, I have knowledge on UI development, 
            Front-End Tools, B2 English Level and many experience on work team projects.  
          </div>
        </div>
        <Skills />
        <div className="grid justify-center place-items-center">
          <h3 className='title-dev-tools m-o mt-14'>DEVELOPMENT TOOLS AND SOFTWARE</h3>
          <Tools />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
