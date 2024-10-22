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
      timer.start({ countdown: true, startValues: { seconds: timeLeft } }); // Startar timern med nedräkningen

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
    setTimeLeft(minutes * 60); // tiden kvar i sekunder
    setIsActive(true);
    navigate("/digital");
  };

  const stopTimer = () => {
    setIsActive(false);
    setTimeLeft(0);
    navigate("/time");
  };

  return (
    //Props:
    // SetTimerPage tar emot setTimerDuration prop
    // AnalogTimerPage och DigitalTimerPage tar emot timeLeft prop (som initialTime) och stopTimer prop
    // 

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