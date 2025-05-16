import React from 'react'
import headphones from '../assets/headphones.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const   Hero = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6'>
      <div className='grid md:grid-cols-2 bg-[url(./assets/bg.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl h-[633px]' >
        {/* left side */}
        <div className='place-content-end pb-20 '> 
          <div className=' p-4'>
            <p className='text-white max-w-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur iste in nobis eveniet iure obcaecati?</p>
            <button className='bg-white text-[#222529] ring-1 ring-white mt-5 px-7 py-2.5 rounded-full'>Explore more</button>
          </div>
        </div>
        {/* right side */}
        <div className='hidden sm:block place-items-end'>
          <div className='flex flex-col rounded-2xl w-[211px] relative top-10 right-4 p-2 bg-white'>
            <img className='bg-slate-900/10 rounded-2xl p-2' src={headphones} alt="" />
            <button className='ring-1 ring-[#f4f4f7] px-7 py-2.5 rounded-full transition-all duration-300 !p-1 !text-xs flex items-center justify-center gap-2 mt-2'>
              Explore this product
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero