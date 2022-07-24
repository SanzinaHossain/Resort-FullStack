import React from 'react'
import Navbar from '../../Shared/Navbar'
import "./Home.css"
import { motion } from "framer-motion"
import heropattern from "../../image/home/hero-pattern.jpg"
const Home = () => {
  return (
    <div class=" w-full hi bg-no-repeat bg-cover lg:p-20 p-12"style={{backgroundImage:`url(${heropattern})`}}>
     <h1 class="text-7xl text-white font-bold">Explore</h1>
     <h1 class="text-5xl text-white lg:mt-6 mt-3">Our Amazing Resort</h1>
     <h1 class="text-xl text-white mt-3">Find great places to stay,eat & visit with luxilarious vibe.</h1>
     <motion.button class="border-2 border-blue-900 rounded-lg text-white p-2 shadow-lg mt-6 hover:bg-blue-700 font-bold hover:border-black"
     whileHover={{scale:1.1}}
     transition={{duration:0.5}}>Descover Now</motion.button>
  </div>
  )
}

export default Home