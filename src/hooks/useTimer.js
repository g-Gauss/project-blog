"use client";

import React from "react";

function useTimer(initialValue = 0) {
  const [time, setTime] = React.useState(initialValue);
  const [intervalId, setIntervalId] = React.useState(null);

  function pause() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  function play() {
    setTime((currentTime) => currentTime + 1);
    setIntervalId(
      setInterval(() => setTime((currentTime) => currentTime + 1), 1000)
    );
  }

  function reset() {
    clearInterval(intervalId);
    setTime(initialValue);
  }

  return { time, play, pause, reset };
}

export default useTimer;
