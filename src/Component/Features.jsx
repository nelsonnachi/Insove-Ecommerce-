import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const Features = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 mt-16'>
      {/* container */}
      <div className='mx-auto max-w-[1440px] flex items-center justify-between flex-wrap gap-8 rounded-2xl bg-[#f4f4f7] py-20 px-4'>
        <div className='flex items-center justify-center gap-x-3'> 
          <RiMoneyDollarCircleLine className='text-3xl'/>
          <div>
            <h4 className='text-[15px] font-[600]'>MONEY-BACK GUARANTEE</h4>
            <p className='text-[#7B7B7B]'>100% refund guaranteed if you're not satisfied</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-3'> 
          <TbTruckDelivery className='text-3xl'/>
          <div>
            <h4 className='text-[15px] font-[600]'>FREE SHIPPING & RETURNS</h4>
            <p className='text-[#7B7B7B]'>Free shipping available and returns on all orders above $99</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-x-3'> 
          <BiSupport className='text-3xl'/>
          <div>
            <h4 className='text-[15px] font-[600]'>24/7 ONLINE SUPPORT</h4>
            <p className='text-[#7B7B7B]'>Our team is here to assist you round the clock</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features