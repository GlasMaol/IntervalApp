import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/pages/landingPage/LandingPage";
import SetTimerPage from "../src/pages/setTimerPage/SetTimerPage";
import AnalogTimerPage from "../src/pages/analogTimerPage/AnalogTimerPage";
import DigitalTimerPage from "../src/pages/digitalTimerPage/DigitalTimerPage";
import TimesUpPage from "../src/pages/timesUpPage/TimesUpPage";
import Timer from "easytimer";

function App() {
  const timer = new Timer();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      timer.start({ countdown: true, startValues: { seconds: timeLeft } }); // Startar timern med nedräkning

      timer.addEventListener("secondsUpdated", function () {
        const remainingTime = timer.getTotalTimeValues().seconds; // Hämtar tiden kvar
        setTimeLeft(remainingTime); // Uppdaterar state med tiden kvar
      });

      timer.addEventListener("targetAchieved", function () {
        navigate("/timesup");
      });
    }

    return () => {
      timer.stop();
    };
  }, [isActive, timeLeft, timer, navigate]);

  const startTimer = (minutes) => {
    setTimeLeft(minutes * 60); // Ställer in tiden kvar i sekunder
    setIsActive(true);
    navigate("/analog");
  };

  const stopTimer = () => {
    setIsActive(false);
    setTimeLeft(0);
    navigate("/time");
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} /> // Definierar vägen för startsidan
        <Route path="/time" element={<SetTimerPage setTimerDuration={startTimer} />} /> // Definierar vägen för att ställa in timern
        <Route path="/analog" element={<AnalogTimerPage timeLeft={timeLeft} stopTimer={stopTimer} />} /> // Definierar vägen för den analoga timern
        <Route path="/digital" element={<DigitalTimerPage timeLeft={timeLeft} stopTimer={stopTimer} />} /> // Definierar vägen för den digitala timern
        <Route path="/timesup" element={<TimesUpPage />} /> // Definierar vägen för sidan när tiden är slut
      </Routes>
    </div>
  );
}

export default App;





//first try
/*import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/pages/landingPage/LandingPage";
import SetTimerPage from "../src/pages/setTimerPage/SetTimerPage";
import AnalogTimerPage from "../src/pages/analogTimerPage/AnalogTimerPage";
import DigitalTimerPage from "../src/pages/digitalTimerPage/DigitalTimerPage";
import TimesUpPage from "../src/pages/timesUpPage/TimesUpPage";
import Timer from "easytimer";

function App({time}) {
  const timer = newTimer();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(time);
    timer.start({countdown: true, startValues: {seconds: time}});
    timer.addEventListener('secondsUpdated', function (e) {
      setTimeLeft(timer.getTimeValues().toString());
    })
  }, []);

  /*useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);*/

  /*const startTimer = (minutes) => {
    setTimeLeft(minutes * 60);
    setIsActive(true);
    navigate('/analog');
  };

  const stopTimer = () => {
    setIsActive(false);
    setTimeLeft(0);
    navigate('/time');
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<SetTimerPage setTimerDuration={startTimer} />} />
        <Route path="/analog" element={<AnalogTimerPage timeLeft={timeLeft} stopTimer={stopTimer} />} />
        <Route path="/digital" element={<DigitalTimerPage timeLeft={timeLeft} stopTimer={stopTimer} />} />
        <Route path="/timesup" element={<TimesUpPage />} />
      </Routes>
    </div>
  );
}

export default App;*/