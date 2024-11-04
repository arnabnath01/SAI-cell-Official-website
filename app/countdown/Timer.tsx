"use client";;

import React, { useState, useEffect } from "react";

const Timer = () => {
  // Set target date to a specific date and time, FORMAT: 2023-01-01T00:00:00
  {
    /*
    YYYY: Four-digit year
    MM: Two-digit month (01-12)
    DD: Two-digit day of the month (01-31)
    T: The letter 'T' as a separator
    HH: Two-digit hour in 24-hour format (00-23)
    MM: Two-digit minutes (00-59)
    SS: Two-digit seconds (00-59)
    
    */
  }
 const targetDate = new Date("2024-12-25T10:30:00").getTime();
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const secondsLeft = (targetDate - now) / 1000;

      const days = pad(Math.floor(secondsLeft / 86400));
      const hours = pad(Math.floor((secondsLeft % 86400) / 3600));
      const minutes = pad(Math.floor((secondsLeft % 3600) / 60));
      const seconds = pad(Math.floor(secondsLeft % 60));

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => (n < 10 ? "0" : "") + n;

  return (
    <div
      id="Timer"
      className="w-full max-h-max text-center bg-gray-800 border border-gray-700 rounded shadow-lg m-auto p-6  top-0 bottom-0 left-0 right-0"
    >
      <div id="tiles" className="relative z-10">
        <span className="w-24 max-w-24 text-4xl font-bold text-gray-700 bg-gray-200 border-t border-white rounded shadow-lg m-2 p-4 inline-block relative">
          {time.days}
        </span>
        <span className="w-24 max-w-24 text-4xl font-bold text-gray-700 bg-gray-200 border-t border-white rounded shadow-lg m-2 p-4 inline-block relative">
          {time.hours}
        </span>
        <span className="w-24 max-w-24 text-4xl font-bold text-gray-700 bg-gray-200 border-t border-white rounded shadow-lg m-2 p-4 inline-block relative">
          {time.minutes}
        </span>
        <span className="w-24 max-w-24 text-4xl font-bold text-gray-700 bg-gray-200 border-t border-white rounded shadow-lg m-2 p-4 inline-block relative">
          {time.seconds}
        </span>
      </div>
      <div className="labels w-full h-6 text-center  bottom-2">
        <li className="w-24 text-lg font-bold text-orange-500 text-center uppercase inline-block">
          Days
        </li>
        <li className="w-24 text-lg font-bold text-orange-500 text-center uppercase inline-block">
          Hours
        </li>
        <li className="w-24 text-lg font-bold text-orange-500 text-center uppercase inline-block">
          Mins
        </li>
        <li className="w-24 text-lg font-bold text-orange-500 text-center uppercase inline-block">
          Secs
        </li>
      </div>
    </div>
  );
};

export default Timer;
