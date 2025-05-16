import React from 'react'
import Hero from '../Component/Hero'
import Features from '../Component/Features'
import NewArrivals from '../Component/NewArrivals'
import PopularProducts from '../Component/PopularProducts'
import About from '../Component/About'
import Blog from '../Component/Blog'
import NewsLetter from '../Component/NewsLetter'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProducts />
      <About />
      <Blog />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home