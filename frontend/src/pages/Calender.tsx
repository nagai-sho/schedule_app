import Day from '../components/Day';
// import '../styles/calender.css';
import CurrentDate from '../components/CurrentDate';
import { Box, Stack, Typography } from '@mui/material';

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
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'left',
            margin: '2px 20px',
          }}
        >
          <CurrentDate />
        </Typography>
        <Stack direction="row">
          <Day date={today} />
          <Day date={new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)} />
          <Day date={new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)} />
        </Stack>
      </Box>
    </>
  );
};

export default Calender;
