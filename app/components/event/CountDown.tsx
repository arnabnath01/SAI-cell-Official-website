"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";

interface CountdownProps {
  timeTillDate: string;
  timeFormat: string;
}

interface SVGCircleProps {
  radius: number;
}

const Countdown: React.FC<CountdownProps> = ({ timeTillDate, timeFormat }) => {
  const [time, setTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment.duration(then.diff(now));

      const days = Math.floor(countdown.asDays());
      const hours = countdown.hours();
      const minutes = countdown.minutes();
      const seconds = countdown.seconds();

      if (then.diff(now) > 0) {
        setTime({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        clearInterval(interval);
        setIsCountdownComplete(true);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timeTillDate, timeFormat]);

  if (isCountdownComplete) {
    return (
      <div className="bg-blue-500 text-white font-serif text-center text-2xl p-4">
        Event completed
      </div>
    );
  }

  if (!time.seconds) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center  font-sans m-0">
      <h1 className="tracking-widest text-center uppercase font-semibold">
        Countdown
      </h1>
      <div className="flex items-center justify-center flex-wrap">
        {time.days && (
          <div className="text-lg flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-24 h-24">
            <SVGCircle radius={Number(time.days)} />
            {time.days}
            <span className="text-base font-semibold uppercase">days</span>
          </div>
        )}
        {time.hours && (
          <div className="text-lg flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-24 h-24">
            <SVGCircle radius={Number(time.hours)} />
            {time.hours}
            <span className="text-base font-semibold uppercase">hours</span>
          </div>
        )}
        {time.minutes && (
          <div className="text-lg flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-24 h-24">
            <SVGCircle radius={Number(time.minutes)} />
            {time.minutes}
            <span className="text-base font-semibold uppercase">minutes</span>
          </div>
        )}
        {time.seconds && (
          <div className="text-lg flex items-center justify-center flex-col leading-7 m-2 pt-2 relative w-24 h-24">
            <SVGCircle radius={Number(time.seconds)} />
            {time.seconds}
            <span className="text-base font-semibold uppercase">seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SVGCircle: React.FC<SVGCircleProps> = ({ radius }) => (
  <svg className="absolute top-0 left-0 w-24 h-24">
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

export default Countdown;
