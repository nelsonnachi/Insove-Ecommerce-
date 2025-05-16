import React, { useState, useEffect, useContext } from "react";
import Title from "./Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import Item from "./Item";
import { ShopContext } from "../Context/shopContext";


const NewArrivals = () => {
  const { products } = useContext(ShopContext);
  const [PopularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 7);
    setPopularProducts(data);
  }, [products]);

  return (
    <section className="max-w-[1440px] px-6 mx-auto pt-16">
      <Title
        title1={"New"}
        title2={"Arrival"}
        titleStyles={"pb-10"}
        paraStyles={"!block"}
      />
      {/* container */}
      <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className=" mt-5 "
      >
        {PopularProducts.map((product) => (
          <SwiperSlide key={product._id} >
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
