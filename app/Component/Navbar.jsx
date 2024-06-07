import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar = () => {
    const spans = gsap.utils.toArray(".span")
    // console.log(spans)
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from(".spans", {
            xPercent: 100,
            stagger: .1,
            opacity: 0,
            duration: .1,

        }, 0)
        tl.from(".button", {
            scale: .2,
            duration: .6,
            ease: "bounce"
        }, 0)


    })
    return (
        <>
            <section className={"navbar-section"}>
                <div>
                    <h1 className='navbar-section-h1 '>
                        <span className='spans'>L</span>
                        <span className='spans'>O</span>
                        <span className='spans'>G</span>
                        <span className='spans'>I</span>
                        <span className='spans'>C</span>

                        <span className='spans'>S</span>
                        <span className='spans'>C</span>
                        <span className='spans'>R</span>
                        <span className='spans'>I</span>
                        <span className='spans'>P</span>
                        <span className='spans'>T</span>
                    </h1>
                </div>
                <div className='md:block hidden'>
                    &lt;logic./script&gt;
                </div>
                <div className='lg:block hidden'>
                    in stras-fr / tokyo and anywhere <span className='w-[40px] h-[5px] bg-[#DEB992]'></span>
                </div>
                <div>
                    <ul className="navbar-section-ul">
                        <li>About</li>
                        <li>Works</li>
                        <li>Talk to me</li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Navbar