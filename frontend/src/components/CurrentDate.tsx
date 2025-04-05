// import { useState, useEffect } from 'react';

const CurrentDate: React.FC = () => {
  const currentMonth = new Date().toLocaleString('ja-jp', { month: 'numeric' });
  // const [currentDate, setCurrentDate] = useState<string>('');

  // useEffect(() => {
  //   const date = new Date();
  //   setCurrentDate(date.toLocaleDateString());
  // }, []);

  return (
    <>
      <div>{currentMonth}</div>
      {/* <div>CurrentDate: {currentDate}</div> */}
    </>
  );
};

export default CurrentDate;
