import { Link } from 'react-router-dom';
import Day from '../components/Day';
import '../styles/calender.css';
import CurrentDate from '../components/CurrentDate';
import { Box } from '@mui/material';

const Calender: React.FC = () => {
  const today = new Date();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
        }}
      >
        <div>
          Calender
          <div></div>
        </div>
        <CurrentDate />
        <div className="days">
          <Day date={today} />
          <Day date={new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)} />
        </div>
        <Link to="/">Topへ</Link>
      </Box>
    </>
  );
};

export default Calender;
