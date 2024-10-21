import '../timesUpPage/timesUpPage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TimesUpPage() {
  return (
    <div className='timesUpPage-container'
    >
      <motion.img
        src="../src/assets/alarm-icon.svg"
        alt="nav icon"
        animate={{
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <h1 className="h1-timesUp">
        Times Up!
      </h1>
      <Link to="/time" className='newTimer-link'>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.8,
            rotate: '3deg'
          }}
          transition={{
            duration: 0.3,
            type: 'spring'
          }}
          className='newTimer-btn'>
          SET NEW TIMER
        </motion.button>
      </Link>
    </div>
  );
}

export default TimesUpPage;

