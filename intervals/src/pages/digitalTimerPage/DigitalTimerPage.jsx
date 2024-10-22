import Countdown from '../../components/countdown/countdown';
import '../digitalTimerPage/digitalTimerPage.css';
import Nav from '../../components/nav/Nav';
import { motion } from 'framer-motion';

// Props: tar emot timeLeft och stopTimer
// timeLft skickas till Countdown.jsx som initialTime

function DigitalTimerPage({ timeLeft, stopTimer }) {
  return (
    <div className="digitalTimerPage-container">
      <Nav />
      <h2 className="h2">Digital Timer</h2>

      <section className="clock-container">
        <Countdown initialTime={timeLeft} view="digital" />
      </section>

      <motion.button
        whileHover={{
          scale: 1.2,
          opacity: 1,
          boxShadow: 'inset 0px 0px 5px .5px red',
        }}
        whileTap={{
          scale: 0.8,
        rotate: '1deg',
        boxShadow: '2px 2px 10px .5px red'

        }}
        transition={{
          duration: 0.2,
          ease: 'easeInOut'
        }}
        className="cancelTimer-btn" onClick={stopTimer}>
        CANCEL TIMER
      </motion.button>
      
    </div>
  );
}

export default DigitalTimerPage;