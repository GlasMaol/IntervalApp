import React from 'react'
import '../landingPage/landingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <Link to="/time" className='home-link'>
      <div className='home-container'>
        <img src="../src/assets/white-hamburger.svg" alt="" />
        <h1 className='h1-white'>
          INTERVAL
        </h1>
        <p className='p-white'>
          For all your timing needs
        </p>
      </div>
    </Link>
  )
}

export default LandingPage
