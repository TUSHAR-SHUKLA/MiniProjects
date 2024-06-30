
import './App.css'
import { Header } from './components/Header'
import { AllRoutes } from './routes/AllRoutes'

function App() {

  return (
    <div className='max-w-7xl m-auto'>
      <Header/>
      <AllRoutes />
    </div>
  )
}

export default App
