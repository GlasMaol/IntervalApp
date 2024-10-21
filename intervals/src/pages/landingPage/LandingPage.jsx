import React from 'react'
import '../landingPage/landingPage.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function LandingPage() {
  return (
    <Link to="/time" className='home-link'>
      <div
        className='home-container'>
        <AnimatePresence>
          <img src="../src/assets/white-hamburger.svg" alt="" />
          <motion.h1
            initial={{
              scale: 1.5,
              rotate: '5deg',
            }}
            animate={{
              scale: 1,
              rotate: '0deg'
            }}
            exit={{
              scale: 10,
            }}
            transition={{
              duration: 0.7,
              type: 'spring',
            }}
            className='h1-white'>
            INTERVAL
          </motion.h1>
          <p className='p-white'>
            For all your timing needs
          </p>
        </AnimatePresence>
      </div>
    </Link>
  )
}

export default LandingPage
