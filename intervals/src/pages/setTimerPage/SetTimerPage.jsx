import { useState } from 'react';
import '../setTimerPage/setTimerPage.css';
import Nav from '../../components/nav/Nav';
import { motion } from 'framer-motion';

function SetTimerPage({ setTimerDuration }) {
  const [minutesInput, setMinutesInput] = useState(0); // State för att hålla koll på användarens inmatade minuter

  const handleStartTimer = () => {
    const duration = parseInt(minutesInput); // Konverterar inmatade minuter till ett nummer
    if (duration > 0) {
      setTimerDuration(duration);
    }
  };

  // Funktion kopplad till höger pil
  const increaseTime = () => {
    setMinutesInput((prev) => Math.min(prev + 1, 59)); // Ökar minuterna, max 59
  };

  // Funktion kopplad till vänster pil
  const decreaseTime = () => {
    setMinutesInput((prev) => Math.max(prev - 1, 0)); // Minskar minuterna, min 0
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
          // Uppdaterar minutesInput vid förändring, begränsar mellan 0 och 59
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
      }}
      whileTap={{
        scale: 0.9,
        rotate: '3deg'
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