import { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);
  return (
    <>
      <h3>Current Time</h3>
      <p style={{ fontSize: '30px' }}>{time}</p>
    </>
  );
};

export default Clock;
