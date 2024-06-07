import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
  const IntroSect = useRef()
  const ScrollSect = useRef()



  useGSAP(() => {
   
    
    const getScrollAmount = () => {
      let ScrollWidth = ScrollSect.current.offsetWidth;
      return -(ScrollWidth - window.innerWidth)
    }

    const tl = gsap.timeline()
    
    tl.to(ScrollSect.current, {
      x: getScrollAmount, 
      duration: 3,
      ease: "none"
    })



    ScrollTrigger.create({
      trigger: ".intro-section",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tl,
      scrub: true,
      invalidateOnRefresh: true,
      pinSpacing:  true,
    })





  })
  return (
    <>
      <section ref={IntroSect} className='intro-section'>
        <div ref={ScrollSect} className='intro-scroll h-full w-[150vw] flex justify-center items-center'>
          <h1 className=' text-[100px] md:text-[120px] lg:text-[200px] font-bold'>Website Developer.</h1>
        </div>
      </section>
    </>
  )
}

export default Intro