import Countdown from '../../components/countdown/countdown';
import '../analogTimerPage/analogTimerPage.css';
import Nav from '../../components/nav/Nav';
import { motion } from 'framer-motion';

function AnalogTimerPage({ timeLeft, stopTimer }) {
  return (
    <div className="analogTimerPage-container">
      <Nav />
      <h2 className="h2">Interval</h2>
      <section className="clock-container">
        <Countdown initialTime={timeLeft} view="analog" />
      </section>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 0.8,
          rotate: '3deg'
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

export default AnalogTimerPage;




/*import Countdown from '../../components/countdown/countdown';
import '../analogTimerPage/analogTimerPage.css';
import Nav from '../../components/nav/Nav';

function AnalogTimerPage({ timeLeft, stopTimer }) {

  return (
    <div className="analogTimerPage-container">
      <Nav />
      <h2 className="h2">Interval</h2>
      <section className="clock-container">
        <Countdown initialTime={timeLeft} view="analog" />
      </section>
      <button className="cancelTimer-btn" onClick={stopTimer}>
        CANCEL TIMER
      </button>
    </div>
  );
}

export default AnalogTimerPage;*/
