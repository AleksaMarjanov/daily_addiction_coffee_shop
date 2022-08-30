import React from 'react'
import { Navbar, About, Menu, Footer, Contact } from '../components'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
