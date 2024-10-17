import React from 'react'

function DigitalTimerPage() {
  return (
    <div className="analogTimerPage-container">
      <img className='navicon' src="../src/assets/navicon.svg" alt="nav icon" />
      <h2 className="h2">
        interval
      </h2>

      <section className="clock-container">
        this is the digi clock
      </section>

      <button className='cancelTimer-btn'>
        CANCEL TIMER
      </button>
    </div>
  )
}

export default DigitalTimerPage
