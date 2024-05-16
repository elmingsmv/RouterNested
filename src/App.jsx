import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './Layout/Navbar'
import EmployerAbout from './pages/EmployerAbout'
import CorpAbout from './pages/CorpAbout'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}>
        <Route path='employer' element={<EmployerAbout/>}/>
        <Route path='corp' element={<CorpAbout/>}/>
      </Route>

      </Routes>
    </div>
  )
}

export default App
