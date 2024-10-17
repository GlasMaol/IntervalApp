import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../../components/countdown/countdown'; // Import your countdown component
import '../digitalTimerPage/digitalTimerPage.css';

function DigitalTimerPage({ timeLeft, stopTimer }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="digitalTimerPage-container">
      <img
        className="navicon"
        src="../src/assets/navicon.svg"
        alt="nav icon"
        onClick={toggleNav}
      />
      {isNavOpen && (
        <div className="fullscreen-nav">
          <img
            className="navicon"
            src="../src/assets/navicon.svg"
            alt="close menu"
            onClick={toggleNav}
          />
          <ul>
            <li><Link to="/analog" onClick={toggleNav}>Analog Timer</Link></li>
            <li><Link to="/digital" onClick={toggleNav}>Digital Timer</Link></li>
          </ul>
        </div>
      )}
      <h2 className="h2">Digital Timer</h2>
      <section className="clock-container">
        <Countdown initialTime={timeLeft} view="digital" /> {/* Pass the time left to Countdown */}
      </section>
      <button className="cancelTimer-btn" onClick={stopTimer}>
        CANCEL TIMER
      </button>
    </div>
  );
}

export default DigitalTimerPage;

/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../digitalTimerPage/digitalTimerPage.css';

function DigitalTimerPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCancel = () => {
    navigate('/time');
  };

  return (
    <div className="digitalTimerPage-container">

      <img
        className="navicon"
        src="../src/assets/navicon.svg"
        alt="nav icon"
        onClick={toggleNav}
      />

      {isNavOpen && (
        <div className="fullscreen-nav">
          <img
            className="navicon"
            src="../src/assets/navicon.svg"
            alt="close menu"
            onClick={toggleNav}
          />
          <ul>
            <li><Link to="/analog" onClick={toggleNav}>Analog Timer</Link></li>
            <li><Link to="/digital" onClick={toggleNav}>Digital Timer</Link></li>
          </ul>
        </div>
      )}

      <h2 className="h2">interval</h2>
      <section className="clock-container">
        this is the digital clock
      </section>
      <button className="cancelTimer-btn" onClick={handleCancel}>
        CANCEL TIMER
      </button>
    </div>
  );
}
export default DigitalTimerPage;*/
