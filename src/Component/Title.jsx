import React from 'react'

const Title = ({title1, title2, title1Styles,titleStyles, paraStyles}) => {
  return (
    <div className={`${titleStyles} pb-5`}>
      <h1 className={`${title1Styles} text-[25px] leading-tight md:text-[35px] md:leading-[1.3] mb-4 font-bold`}>
        {title1} <span className='text-[#222529] underline !font-light'>{title2}</span>
      </h1>
      <p className={`${paraStyles} hidden text-[#7B7B7B]`}>Discover the best deals on top quality products, crafted <br /> to elevate your everyday exprience.</p>
    </div>
  )
}

export default Title