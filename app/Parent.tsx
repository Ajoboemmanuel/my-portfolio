"use client"
import Navbar from "@/app/Component/Navbar.jsx"
import Hero from "@/app/Component/Hero.jsx"
import Intro from "@/app/Component/Intro.jsx"
import About from "@/app/Component/About.jsx"
import HeroThree from "@/app/Component/HeroThree.jsx"
import MyName from "@/app/Component/Name.jsx"
import Skills from "@/app/Component/Skill.jsx"
import Footer from "@/app/Component/Footer.jsx"
import React from 'react'



const Parent = () => {
  return (
    <>

      <div className="overflow-hidden">
        <div className='fixed -z-10 w-full h-full'>
          <HeroThree />
        </div>

        <div>
          <Navbar />
        </div>
        <div>
          <MyName />
        </div>

        <div>
          <Intro />
        </div>
        <div>
          <Skills />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default Parent