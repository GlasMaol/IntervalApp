import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../setTimerPage/setTimerPage.css';

function SetTimerPage({ setTimerDuration }) {
  const [minutesInput, setMinutesInput] = useState(0);
  const navigate = useNavigate();

  const handleStartTimer = () => {
    const duration = parseInt(minutesInput);
    if (duration > 0) {
      setTimerDuration(duration); // Use the prop function to start the timer
    }
  };

  const increaseTime = () => {
    setMinutesInput((prev) => Math.min(prev + 1, 59));
  };

  const decreaseTime = () => {
    setMinutesInput((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className='setTimer-container'>
      <section className='timeControls-container'>
        <img
          src="../src/assets/left-arrow.svg"
          alt="arrow left"
          onClick={decreaseTime}
          className='arrow-icon'
        />
        <input
          type="number"
          min="0"
          max="59"
          placeholder="Minutes"
          value={minutesInput}
          onChange={(e) => setMinutesInput(Math.max(0, Math.min(59, e.target.value)))}
        />
        <img
          src="../src/assets/right-arrow.svg"
          alt="arrow right"
          onClick={increaseTime}
          className='arrow-icon'
        />
      </section>
      <h2>minutes</h2>
      <button className='setTime-btn' onClick={handleStartTimer}>
        START TIMER
      </button>
    </div>
  );
}

export default SetTimerPage;


/*import React from 'react'
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

export default SetTimerPage*/
