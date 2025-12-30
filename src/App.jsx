import './App.css'
import Navbar from './components/Navbar'
import AlertContainer from './components/AlertContainer'
import MainContainer from './components/MainContainer'

function App() {

  return (
    <>
      <div className="p-2">
        <Navbar />
        <div className='flex'>
          <AlertContainer />
          <MainContainer />
        </div>

      </div>

    </>
  )
}

export default App
