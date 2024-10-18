import Countdown from '../../components/countdown/countdown';
import '../digitalTimerPage/digitalTimerPage.css';
import Nav from '../../components/nav/Nav';

function DigitalTimerPage({ timeLeft, stopTimer }) {
  return (
    <div className="digitalTimerPage-container">
      <Nav />
      <h2 className="h2">Digital Timer</h2>
      <section className="clock-container">
        {/* Use the Countdown component with the timeLeft prop */}
        <Countdown initialTime={timeLeft} view="digital" />
      </section>
      <button className="cancelTimer-btn" onClick={stopTimer}>
        CANCEL TIMER
      </button>
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