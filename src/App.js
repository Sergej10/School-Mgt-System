import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Welcome from './components/Welcome/Welcome'
import Card from './components/Card/Card'
import Office from './components/FrontOffice/Office'
import AboutUs from './components/AboutUs/aboutUs'
import Contact from './components/Contact/Contact'
import Notice from './components/Notice/Notice'

function App  () {
  return (
    <>
     <Navbar/>
    <Router>
      
       <Hero/>
       <Welcome/>
       
<Card/>
      <Routes>
     <Route path='./components/Hero/Hero' exact component={Hero} />
  <Route path='./components/AboutUs/aboutUs' component={AboutUs} />
  <Route path='./components/Contact/Contact' component={Contact} />
  <Route path='./components/Notice/Notice' component={Notice} />
   <Route path= './components/FrontOffice/Office' component={Office} />
    </Routes>
    </Router>
    </>
  )
}

export default App