import { useState, useEffect } from 'react';

const CurrentDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <>
      <div>CurrentDate: {currentDate}</div>
    </>
  );
};

export default CurrentDate;
