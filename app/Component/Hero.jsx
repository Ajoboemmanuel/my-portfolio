import { useGSAP } from '@gsap/react'
import React from 'react'

import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".website", {
            xPercent: 150,
            duration: 1,
            ease: "bounce",
            delay: 1,
        }, 0)
        tl.from(".developer", {
            xPercent: -150,
            duration: 1,
            ease: "bounce",
        })
    })

    return (
        <>
            <section className='hero-section'>

                <div className='hero-div'>
                    <div className='hero-texts'>
                        <div>
                            <div className='website'>
                                <span>W</span>
                                <span>E</span>
                                <span>B</span>
                                <span>S</span>
                                <span>I</span>
                                <span>T</span>
                                <span>E</span>
                            </div>
                            <div className='developer'>
                                <span>D</span>
                                <span>E</span>
                                <span>V</span>
                                <span>E</span>
                                <span>L</span>
                                <span>O</span>
                                <span>P</span>
                                <span>E</span>
                                <span>R</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Hero