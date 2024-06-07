import { OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Avater } from "@/app/Tools/Avater.jsx"
import React from 'react'
import gsap from 'gsap'


const HeroThree = () => {
  
  return (
    <>

      <Canvas>
        <pointLight position={[1, 3, 1]} intensity={5}/>
        <ambientLight intensity={.5} />

        <Avater />
      </Canvas>

    </>
  )
}

export default HeroThree