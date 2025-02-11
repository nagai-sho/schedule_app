import { useState, useEffect, useRef } from 'react';

const StopWatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning]);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(milliseconds / 6000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    return `
      ${String(minutes).padStart(2, '0')}
      :${String(seconds).padStart(2, '0')}
      :${String(ms).padStart(2, '0')}
    `;
  };

  return (
    <>
      <div className="p-4 max-w-sm mx-auto border rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">StopWatch</h2>
        <div className="text-3xl font-mono p-4 border rounded bg-gray-100">
          {formatTime(time)}
        </div>
        <div className="mt-4 space-x-2">
          <button
            className={`px-4 py-3 text-white rounded ${
              isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => {
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
