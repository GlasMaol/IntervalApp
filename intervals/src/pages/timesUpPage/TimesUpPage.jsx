import React from 'react'
import '../timesUpPage/timesUpPage.css'

function TimesUpPage() {
  return (
    <div className='timesUpPage-container'>
      <img src="../src/assets/alarm-icon.svg" alt="nav icon" />
      <h1 className="h1-timesUp">
        Times Up!
      </h1>

      <button className='newTimer-btn'>
        SET NEW TIMER
      </button>
    </div>
  )
}

export default TimesUpPage
