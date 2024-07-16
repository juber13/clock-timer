/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

const Content = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsRunning(false);
            setIsBreak(true);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (isBreak) {
      interval = setInterval(() => {
        if (breakSeconds === 0) {
          if (breakMinutes === 0) {
            clearInterval(interval);
            setIsBreak(false);
            setMinutes(25);
            setSeconds(0);
          } else {
            setBreakMinutes((prevMinutes) => prevMinutes - 1);
            setBreakSeconds(59);
          }
        } else {
          setBreakSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, isBreak, breakSeconds, activeButton]);

  const handleStart = () => {
    setIsRunning(true);
    setActiveButton('start');
  };

  const handlePause = () => {
    setIsRunning(false);
    setActiveButton('pause');
  };

  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    setIsBreak(false);
    setBreakMinutes(5);
    setBreakSeconds(0);
    setActiveButton('reset');
  };

  return (
    <div className='w-full flex flex-col  justify-center  bg-[#f6f2f4]  items-center' style={{ height: "100vh" }}>
      <div className='flex flex-col gap-3 '>

        <div className='text-center'>
          {isBreak ? (
            <>
              <h4>Break Time</h4>
              <h1 className='text-8xl font-bold text-blue-600'>{breakMinutes.toString().padStart(2, '0')}:{breakSeconds.toString().padStart(2, '0')}</h1>
            </>
          ) : (
            <h1 className='text-8xl font-bold text-gray-500'>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
          )}
        </div>
        <div className=''>
          {
            !isBreak &&
            <>

              <button
                className={`border text-md px-4 py-2 ml-2 rounded-full ${activeButton === 'start' ? 'bg-blue-400 text-white' : 'bg-white'}`}
                onClick={handleStart}
              >
                Start
              </button>
              <button
                className={`border text-md px-4 py-2 ml-2 rounded-full ${activeButton === 'pause' ? 'bg-blue-400 text-white' : 'bg-white'}`}
                onClick={handlePause}
              >
                Pause
              </button>
              <button
                className={`border text-md px-4 py-2 bg-white ml-2 rounded-full ${activeButton === 'reset' ? 'bg-blue-400' : ''}`}
                onClick={handleReset}
              >
                Reset
              </button>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Content;
