import './App.css'
import Navbar from './components/Navbar'
import AlertContainer from './components/AlertContainer'
import MainContainer from './components/MainContainer'
import DetailAlert from './components/DetailAlert'

function App() {

  return (
    <>
      <div className="p-2 no-scrollbar bg-gray-700 min-h-screen">
        <Navbar />
        <div className='flex'>
          <AlertContainer />
          <MainContainer />
          <DetailAlert/>
        </div>

      </div>

    </>
  )
}

export default App
