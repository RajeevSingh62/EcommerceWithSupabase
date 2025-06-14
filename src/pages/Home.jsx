import React from 'react'
import supabase from '../services/supabaseClient'
import Navbar from '../components/Navbar'

import AllUsers from '../components/AllUsers'
import ProductCard from '../components/ProductCard'
import Categories from '../components/Categories'
import AuthGuard from '../utils/AuthGuard'
import Carousel from './Carousel'
import Footer from './Footer'
import MainBody from './MainBody'
import About from './About'
import BlogList from '../components/Blogs/BlogList'

const Home = () => {
    // console.log(supabase)
  return (
    <div>
     
      
      <Carousel/>
      <BlogList/>
      {/* <MainBody/> */}
      <About/>
      <Footer/>
    
  
     
    </div>
  )
}

export default Home

