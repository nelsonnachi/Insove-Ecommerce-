import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/data';
import Item from './Item';

const PopularProducts = () => {

  const [popularProduct, setpopularProduct] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setpopularProduct(data);
  }, [])

  return (
    <section className='max-w-[1440px] mx-auto px-6 mt-16'>
      <Title
        title1={"Popular"}
        title2={"Products"}
        titleStyles={"pb-10"}
        paraStyles={"!block "}
      />
      {/* container */}
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {popularProduct.map((product) => (
          <div key={product._id}>
            <Item product={product}/>
          </div>
          ))}
        </div>
    </section>
  )
}

export default PopularProducts