import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import '../countdown/countdown.css';


// Countdown-komponenten med initial tid och vy
const Countdown = ({ initialTime, view }) => { 
    const minutes = Math.floor(initialTime / 60); // Beräknar minuter från initial tid
    const seconds = initialTime % 60; // Beräknar sekunder från initial tid
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
                             // Mappar 60 minutmarkeringar runt klockan
                            <div
                                key={i}
                                className="minute-mark"
                                style={{ transform: `rotate(${i * 6}deg) translateY(-1000%)` }}
                            />
                        ))}
                        <motion.div
                            className="hand minute-hand"
                            style={{ rotate: minuteRotation }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                            }}
                        />
                        <motion.div
                            className="hand second-hand"
                            style={{ rotate: secondRotation }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                            }}
                        />
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



/*import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../countdown/countdown.css';

const Countdown = ({ initialTime, view }) => {
    const [time, setTime] = useState(initialTime);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const navigate = useNavigate();

    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    useEffect(() => {
        if (time > 0) {
            const interval = setInterval(() => {
                setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
            }, 1000);

            return () => clearInterval(interval);
        } else {
            navigate('/timesup');
        }
    }, [time, navigate]);

    //gör att visarna inte hoppar när usern togglar mellan views.
    const minuteRotation = minutes * 6;
    const secondRotation = seconds * 6;

    return (
        <div className="countdown-container">
            {view === 'analog' ? (
                <div className="clock-container">
                    <div className="clock-face">

                        {[...Array(60)].map((_, i) => (
                            <div
                                //skapar en array med 60 platser utan värden. _ används för att ignorera elementvärdet och använder bara index (i)
                                key={i}
                                className="minute-mark"
                                style={{ transform: `rotate(${i * 6}deg) translateY(-1000%)` }}
                            />
                        ))}
                        <motion.div
                            className="hand minute-hand"
                            style={{ rotate: minuteRotation }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                            }}
                        />
                        <motion.div
                            className="hand second-hand"
                            style={{ rotate: secondRotation }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div className="digitalClock-container">
                    <p className='digital-display'>{minutes} : {formattedSeconds}</p>
                </div>
            )}
        </div>
    );
};

export default Countdown;*/