import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/pages/landingPage/LandingPage";
import SetTimerPage from "../src/pages/setTimerPage/SetTimerPage";
import AnalogTimerPage from "../src/pages/analogTimerPage/AnalogTimerPage";
import DigitalTimerPage from "../src/pages/digitalTimerPage/DigitalTimerPage";
import TimesUpPage from "../src/pages/timesUpPage/TimesUpPage";

function App() {
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }

    // Clean up timer on unmount or when dependencies change
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startTimer = (minutes) => {
    setDuration(minutes);
    setTimeLeft(minutes * 60); // Convert minutes to seconds
    setIsActive(true);
    navigate('/analog'); // Navigate to the analog view immediately after starting the timer
  };

  const stopTimer = () => {
    setIsActive(false);
    setTimeLeft(0);
    navigate('/time'); // Navigate back to SetTimerPage
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

export default App;

/*import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/landingPage/LandingPage";
import Time from "../src/pages/setTimerPage/SetTimerPage";
import Analog from "../src/pages/analogTimerPage/AnalogTimerPage";
import Digital from "../src/pages/digitalTimerPage/DigitalTimerPage";
import TimesUp from "../src/pages/timesUpPage/TimesUpPage";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<Time />} />
        <Route path="/analog" element={<Analog />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/timesup" element={<TimesUp />} />
      </Routes>
    </div>
  )
}

export default App*/
