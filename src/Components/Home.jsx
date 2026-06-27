import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'

import Projects from './Projects'
import Contact from './Contact'

import Footer from '../Layout/Footer'
function Home() {
  return (
    <div>
        <Navbar/>
      
      <section id="home">
        <Hero />
         
      </section>
       <section id="about">
        <About/>
      </section>
      <section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Contact />
</section>
     
      <Footer/>

    </div>
  )
}

export default Home

