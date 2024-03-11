import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar'
import AnimatedRoutes from './Components/AnimatedRoutes'
import Footer from './Components/Footer'

function App() {
  return <>
    <BrowserRouter>
      {/* <div className='container-fluid'> */}
      <NavBar />
      <AnimatedRoutes/>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  </>
}

export default App