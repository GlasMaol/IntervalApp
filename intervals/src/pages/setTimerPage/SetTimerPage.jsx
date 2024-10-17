import React from 'react'
import '../setTimerPage/setTimerPage.css'

function SetTimerPage() {
  return (
    <div className='setTimer-container'>
      <img className='navicon' src="../src/assets/navicon.svg" alt="nav icon" />

      <section className='chooseTime-section'>
        <img src="../src/assets/left-arrow.svg"alt="arrow left" />
        choose time
        <img src="../src/assets/right-arrow.svg"alt="arrow right" />
      </section>

      <section className='options-section'>

      </section>

      <button className='setTime-btn'>
        START TIMER
      </button>
      
    </div>
  )
}

export default SetTimerPage
