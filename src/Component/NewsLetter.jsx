import React from 'react'
import { FaDribbble, FaFacebook, FaInstagram } from 'react-icons/fa6'


const NewsLetter = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 border-t-[1px] border-b-[1px] border-[#f4f4f7] py-16'>
      <div className='flex items-center justify-between flex-wrap gap-7'>
        <div>
          <h4 className='text-[14px] font-[700] uppercase tracking-wider'>Subscribe newsLetter</h4>
          <p>Get latest information on Events, Sales, & Offers.</p>
        </div>
        <div>
        <div className='flex bg-[#f4f4f7]'>
          <input type="email" placeholder='Email Address' className='p-4 bg-[#f4f4f7] w-[266px] outline-none text-[14px]'/>
          // <button className='bg-[#222529] text-white ring-1 ring-[#222529] px-3 py-2.5  !rounded-none !font-bold'>Submit</button>
        </div>
        </div>
        <div className='flex gap-x-3 pr-14'>
           <div className='h-8 w-8 rounded-full hover:bg-[#222529] hover:text-white flex items-center justify-center transition-all duration-500'><FaFacebook /></div>
           <div className='h-8 w-8 rounded-full hover:bg-[#222529] hover:text-white flex items-center justify-center transition-all duration-500'><FaInstagram /></div>
           <div className='h-8 w-8 rounded-full hover:bg-[#222529] hover:text-white flex items-center justify-center transition-all duration-500'><FaDribbble /></div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter