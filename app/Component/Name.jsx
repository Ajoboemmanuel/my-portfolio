import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Name = () => {

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".website", {
            xPercent: 150,
            duration: 2,
            ease: "bounce",
            delay: 1,
        }, 0)
    })
    

    return (
        <>

            <section className='w-full h-[100vh] flex justify-center items-center overflow-hidden'>
                <div className='w-full h-[100vh] text-center overflow-hidden '>
                    <h1 className='text-[150px] lg:text-[280px]    website text-center absolute bottom-0 left-0 font-extrabold'>
                        <span> L./Script</span>
                    </h1>

                </div>

            </section>

        </>
    )
}

export default Name