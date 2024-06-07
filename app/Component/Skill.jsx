import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Skill = () => {
  return (
    <>

      <section className='w-full h-[100vh] website-developer'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='parentSwiper '>
              <div className=' card'>
                <img className='w-[70%]  h-[70%] object-cover' src='/images/html.png' />
              </div>
              <div className='card-content'>
                <h1 className='text-[35px] text-center text-white font-bold'>
                  HTML
                </h1>
                <p className='text-white text-[13px]'>
                  I excels in HTML, crafting clean, semantic, and responsive code.
                </p>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
          <div className='parentSwiper'>
              <div className=' card'>
                <img className='w-[70%] h-[70%] object-cover' src='/images/css.png' />
              </div>
              <div className='card-content'>
                <h1 className='text-[35px] text-center text-white font-bold'>
                  CSS
                </h1>
                <p className='text-white text-[13px]'>
                  I excels in HTML, crafting clean, semantic, and responsive code.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='parentSwiper'>
              <div className=' card'>
                <img className='w-[70%] h-[70%] object-cover' src='/images/java.png' />
              </div>
              <div className='card-content'>
                <h1 className='text-[35px] text-center text-white font-bold'>
                  JAVASCRIPT
                </h1>
                <p className='text-white text-[13px]'>
                  I excels in HTML, crafting clean, semantic, and responsive code.
                </p>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
          <div className='parentSwiper'>
              <div className=' card'>
                <img className='w-[70%] h-[70%] object-cover' src='/images/react.png' />
              </div>
              <div className='card-content'>
                <h1 className='text-[35px] text-center text-white font-bold'>
                  REACT
                </h1>
                <p className='text-white text-[13px]'>
                  I excels in HTML, crafting clean, semantic, and responsive code.
                </p>


              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

    </>
  )
}

export default Skill