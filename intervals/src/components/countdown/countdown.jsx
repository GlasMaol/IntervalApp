import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import '../countdown/countdown.css';

// props: tar emot initialTime (från Analog- och digitalTimerPage) och view
// 

const Countdown = ({ initialTime, view }) => { 
    const minutes = Math.floor(initialTime / 60); // Räknar ut minuter från initial tid
    const seconds = initialTime % 60; // Räknar ut sekunder från initial tid
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds; // Formaterar sekunder till två siffror
    const navigate = useNavigate();

    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    useEffect(() => {
        if (initialTime <= 0) {
            navigate("/timesup");
        }
    }, [initialTime, navigate]);

    return (
        <div className="countdown-container">
            {view === "analog" ? (
                <div className="clock-container">
                    <div className="clock-face">
                        {[...Array(60)].map((_, i) => (
                             // Mappar 60 minutmarkeringar runt klockan utan att associera direkta värden på de
                            <div
                                key={i}
                                className="minute-mark"
                                style={{ transform: `rotate(${i * 6}deg) translateY(-1000%)` }}
                            />
                        ))}
                        <motion.div
                            className="hand minute-hand"
                            animate={{ rotate: minuteRotation }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 8,
                            }}
                        ></motion.div>

                        <motion.div
                            className="hand second-hand"
                            style={{ rotate: secondRotation }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 8,
                            }}
                        ></motion.div>
                    </div>
                </div>
            ) : (
                <div className="digitalClock-container">
                    <p className="digital-display">
                        {minutes} : {formattedSeconds}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Countdown;