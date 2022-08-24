import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Product from '../components/Product'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Home