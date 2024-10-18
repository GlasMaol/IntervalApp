import Countdown from '../../components/countdown/countdown';
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
