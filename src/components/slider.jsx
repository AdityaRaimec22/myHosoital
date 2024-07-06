import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Slider({hospitals}) {
  return (
    <div className="container w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        
            {hospitals && hospitals.map((ele) => {
              return <SwiperSlide>
              <div className='flex flex-col rounded-3xl h-[19vw] bg-white custom-md:h-[30vw] custom-md:w-[40vw] lg:h-[19vw] lg:w-auto' style={{ border: 'solid 1px  black', borderRadius: '15%' }}>
                <div>
                  <img className='border' src="/Images/slideImage.png" alt="" />
                </div>
                <div className='flex justify-between mt-6'>
                  <img className='h-[7vw] w-[7vw] rounded-full ml-4' src="https://getwallpapers.com/wallpaper/full/a/2/f/1092972-nature-background-hd-2560x1600-for-tablet.jpg" alt="" />
                  <div className='flex flex-col w-[100%] ml-[1vw]'>
                    <div className='flex justify-between'>
                      <div>
                        <h1 className='text-black text-[1.4vw] font-semibold mt-[1vw]'>{ele.name}</h1>
                        <h1 className='mt-[0.7vw] text-[1vw] '>{ele.address}</h1>
                        <h1 className='text-[1vw]'>{ele.state}, {ele.city} {ele.pinCode}</h1>
                        <h1 className='mt-[0.5vw] text-[1vw]'>Since {ele.established}</h1>
                      </div>
                      < img className='mr-[1vw] h-[5vw]' src='/Images/rating.png'/>
                    </div>
                    
                  </div>
                </div>
                <div className='mx-[2vw] my-[1vw] flex flex-wrap'>
                  {ele.facilities && ele.facilities.map((ele) => {
                    return <div className='bg-slate-400 p-[0.3vw] rounded-lg shadow-lg'>
                      <h1 className='text font-semibold text-[1vw]'>{ele.name}</h1>
                    </div>
                  })}
                </div>
                <div className='flex justify-center items-center px-auto'>
                <Link href={`/Hospital/${ele._id}`} >
                  <button className='py-[0.2vw] px-[1.2vw] rounded-full bg-sky-400 text-white text-[1vw]'>View Profile</button>
                  </Link>
                </div>
              </div>

            </SwiperSlide>
            })}
          {/* })
        } */}
      </Swiper>
    </div>
  );
}

export default Slider;