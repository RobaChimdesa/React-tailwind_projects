import React from 'react'
import NavbarForAllUser from './NavbarForAllUser'
import About from './About'
import Home from './Home'
import Footer from './Footer'
const PageForAll = () => {
  return (
    <div>
      <NavbarForAllUser/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  )
}

export default PageForAll
