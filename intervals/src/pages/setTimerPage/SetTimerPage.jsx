import { useState } from 'react';
import '../setTimerPage/setTimerPage.css';
import Nav from '../../components/nav/Nav';

function SetTimerPage({ setTimerDuration }) {
  const [minutesInput, setMinutesInput] = useState(0);

  const handleStartTimer = () => {
    const duration = parseInt(minutesInput);
    if (duration > 0) {
      setTimerDuration(duration); // Set the duration in App.jsx and start the timer
    }
  };

  const increaseTime = () => {
    setMinutesInput((prev) => Math.min(prev + 1, 59)); // Increment time
  };

  const decreaseTime = () => {
    setMinutesInput((prev) => Math.max(prev - 1, 0)); // Decrement time
  };

  return (
    <div className='setTimer-container'>
      <Nav />
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




/*import { useState } from 'react';
import '../setTimerPage/setTimerPage.css';
import Nav from '../../components/nav/Nav';

function SetTimerPage({ setTimerDuration }) {
  const [minutesInput, setMinutesInput] = useState(0);

  const handleStartTimer = () => {
    const duration = parseInt(minutesInput);
    if (duration > 0) {
      setTimerDuration(duration);
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
      <Nav />
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

export default SetTimerPage;*/