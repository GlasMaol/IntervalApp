import { Routes, Route } from "react-router-dom";
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

export default App
