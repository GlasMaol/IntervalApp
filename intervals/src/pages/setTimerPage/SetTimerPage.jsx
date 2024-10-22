import { useState } from 'react';
import '../setTimerPage/setTimerPage.css';
import Nav from '../../components/nav/Nav';
import { motion } from 'framer-motion';

// tar emot setTimerDuration från App
// handleStartTimer konverterar input till en siffra och anropar setTimerDuration om duration är över noll
//

function SetTimerPage({ setTimerDuration }) {
  const [minutesInput, setMinutesInput] = useState(0);

  const handleStartTimer = () => {
    const duration = parseInt(minutesInput); // Konverterar inmatade minuter till en siffra
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
        <motion.img
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.8,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeInOut'
        }}
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
          // Uppdaterar minutesInput, begränsar mellan 0 och 59
        />
        <motion.img
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.8,
        }}
        transition={{
          duration: 0.1,
          ease: 'easeInOut'
        }}
          src="../src/assets/right-arrow.svg"
          alt="arrow right"
          onClick={increaseTime}
          className='arrow-icon'
        />
      </section>
      <h2>minutes</h2>
      <motion.button 
      whileHover={{
        scale: 1.05,
        boxShadow: 'inset 0px 0px 5px .5px green',
      }}
      whileTap={{
        scale: 0.9,
        rotate: '1deg',
        boxShadow: '2px 2px 10px .5px green',
      }}
      transition={{
        duration: 0.15,
        ease: 'easeInOut'
      }}
      className='setTime-btn' onClick={handleStartTimer}>
        START TIMER
      </motion.button>
    </div>
  );
}

export default SetTimerPage;