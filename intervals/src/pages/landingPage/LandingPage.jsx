import React from 'react'
import '../landingPage/landingPage.css'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'

function LandingPage() {
  return (
    <Link to="/time" className='home-link'>
      <div
        className='home-container'>
          <img src="../src/assets/white-hamburger.svg" alt="" />
          <motion.h1
            initial={{
              opacity: 0,
              scale: 1.5,
              rotate: '5deg',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: '0deg'
            }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className='h1-white'>
            INTERVAL
          </motion.h1>
          <p className='p-white'>
            For all your timing needs
          </p>
      </div>
    </Link>
  )
}

export default LandingPage
