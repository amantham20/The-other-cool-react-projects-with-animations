// import React, {useState} from React

import React, { useState } from 'react'
// import {use}

import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import CustomCursor from '../CustomCursor'
import Header from '../components/Header'
import Featured from '../components/Featured'
import About from '../components/About'
import Gallery from '../components/Gallery'


import './index.css'

const Home = () => {
  return (
   <>
    <CustomCursor />

    <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        {/* <Featured /> */}
        <About />
        {/* <Gallery /> */}
        
    </div>
    <Footer />
   </>
  )
}

export default Home