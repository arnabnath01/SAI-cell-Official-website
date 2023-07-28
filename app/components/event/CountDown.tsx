'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import "@/styles/countDown.css"
const CountdownTimer = () => {
  const [clock, setClock] = useState<any>();
  const [targetDate, setTargetDate] = useState<moment.Moment>(
    moment.tz('2023-08-27 10:30', 'Australia/Sydney')
  );

  useEffect(() => {
    const currentDate = moment();
    const diff = targetDate.diff(currentDate, 'seconds');

    if (diff <= 0) {
      setClock(
        <div>Date has already passed!</div>
      );
    } else {
      const timer = setInterval(() => {
        const diff = targetDate.diff(moment(), 'seconds');
        const duration = moment.duration(diff, 'seconds');
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        if (diff <= 0) {
          clearInterval(timer);
          setClock(
            <div>Timer has ended!</div>
          );
        } else {
          setClock(
            <div className='flex flex-row'>
              <div className='text-lg text-zinc-700'>{days} days</div>
              <div className='text-lg text-zinc-700'>{hours} hours</div>
              <div className='text-lg text-zinc-700'>{minutes} minutes</div>
              <div className='text-lg text-zinc-700'>{seconds} seconds</div>
            </div>
          );
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [targetDate]);

  return (
    <div className="clock">
        {/* <h1>Upcoming Event</h1>
         */}
        {clock}</div>
  );
};

export default CountdownTimer;