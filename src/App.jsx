import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Error from './pages/Error'

import Singlemeal from './pages/Singlemeal'



function App() {


  return (
    <div className='container'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      {/* <Route path='/meal/:id' element={<Singlemeal/>}/> */}
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>
  )
}

export default App
