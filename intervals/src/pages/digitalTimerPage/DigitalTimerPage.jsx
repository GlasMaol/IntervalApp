import Countdown from '../../components/countdown/countdown';
import '../digitalTimerPage/digitalTimerPage.css';
import Nav from '../../components/nav/Nav';
import { motion } from 'framer-motion';

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

export default DigitalTimerPage;



/*import Countdown from '../../components/countdown/countdown';
import '../digitalTimerPage/digitalTimerPage.css';
import Nav from '../../components/nav/Nav';

function DigitalTimerPage({ timeLeft, stopTimer }) {

  return (
    <div className="digitalTimerPage-container">
      <Nav />
      <h2 className="h2">Digital Timer</h2>
      <section className="clock-container">
        <Countdown initialTime={timeLeft} view="digital" />
      </section>
      <button className="cancelTimer-btn" onClick={stopTimer}>
        CANCEL TIMER
      </button>
    </div>
  );
}

export default DigitalTimerPage;*/