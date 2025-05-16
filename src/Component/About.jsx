import React from 'react'
import Title from './Title'
import testimonial from '../assets/testimonial.jpg'
import about from '../assets/about.png.jpg'
import { TbLocation } from 'react-icons/tb'
import { RiAdminLine, RiSecurePaymentLine, RiSoundModuleLine } from 'react-icons/ri'
import { FaQuoteLeft, FaUsersLine } from 'react-icons/fa6'

const About = () => {
  return (
    <section className='max-w-[1440px] mx-auto px-6 pt-16 '>
      {/* container */}
      <div className='flex flex-col md:flex-row gap-5 gap-y-10'>
        {/* testimonials */}
        <div className='flex-1 flex items-center justify-center flex-col'>
          <Title
            title1={"People"}
            title2={"Says"}
            titleStyles={"text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"}
          />
          <img src={testimonial} alt="" height={55} width={55} className='rounded-full'/>
          <h4 className='mt-6 text-[16px] md:text-[17px] mb-2 font-bold'>John Doe</h4>
          <p className='relative bottom-2'>CEO At TechStack</p>
          <FaQuoteLeft />
          <p className='max-w-[222px] mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perspiciatis cum explicabo. Laudantium, expedita. A!</p>
        </div>
        {/* banner */}
        <div className='flex-[2] flex rounded-2xl relative'>
          <img src={about} alt="" className='rounded-2xl'/>
          <div className='absolute  h-full w-full bg-white/20 top-0 left-0'/>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 p-6 rounded-xl'>
            <h4 className='text-center text-[18px] font-[700]'>Top view in this <br /> week</h4>
            <h2 className='text-[25px] leading-tight md:text-[35px] md:leading-[1.3] mb-4 font-bold uppercase'>Trending</h2>
          </div>
        </div>
        {/* ABout */}
        <div className='flex-[1] flex items-center justify-center flex-col'>
          <Title
            title1={"About"}
            title2={"Us"}
            titleStyles={"text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold"}
          />
          <div className='flex flex-col items-start'>
            <div className='flex items-center justify-center gap-3 mb-3'>
              <RiSecurePaymentLine className='text-xl'/>
              <div>
                <h4 className='text-[14px] md:text-[15px] mb-1 font-bold'>Fast & Secure</h4>
                <p>Optimized performance</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mb-3'>
              <RiSoundModuleLine className='text-xl'/>
              <div>
                <h4 className='text-[14px] md:text-[15px] mb-1 font-bold'>Advanced Filtering</h4>
                <p>Find items quickly</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mb-3'>
              <FaUsersLine className='text-xl'/>
              <div>
                <h4 className='text-[14px] md:text-[15px] mb-1 font-bold'>User Review</h4>
                <p>Rating & feedback</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mb-3'>
              <TbLocation className='text-xl'/>
              <div>
                <h4 className='text-[14px] md:text-[15px] mb-1 font-bold'>Order Tracking</h4>
                <p>Live order status</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 mb-3'>
              <RiAdminLine className='text-xl'/>
              <div>
                <h4 className='text-[14px] md:text-[15px] mb-1 font-bold'>Admin Dashboard</h4>
                <p>Manage store easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About