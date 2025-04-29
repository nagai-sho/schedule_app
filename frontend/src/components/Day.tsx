import Factory from './Factory';
import Construction from './Construction';
import Transport from './Transport';
import EventButton from './EventButton';
import { Box, Stack, TextField } from '@mui/material';
import colorCodes from '../config/colors';
// import '../styles/day.css';

interface DayProps {
  date: Date;
}

const Day: React.FC<DayProps> = ({ date }) => {
  return (
    <Box>
      <Stack
        sx={{
          margin: '5px',
        }}
      >
        <Stack
          sx={{
            border: `solid 0.5px ${colorCodes.border.default}`,
            borderRadius: '10px',
            color: colorCodes.text.default,
            backgroundColor: 'transparent',
            backdropFilter: 'Blur(30px)',
            marginBottom: '10px',
          }}
        >
          <div>{date.getDate()}</div>
          <div>{date.toLocaleDateString('ja-JP', { weekday: 'short' })}</div>
        </Stack>
        <Stack
          sx={{
            border: `solid 0.5px ${colorCodes.border.default}`,
            borderRadius: '10px',
            color: colorCodes.text.default,
            backgroundColor: 'transparent',
            backdropFilter: 'Blur(30px)',

            padding: '5px',
          }}
        >
          <Transport />
          <Construction />
          <Factory />
          <div>
            <label htmlFor="content">イベント</label>
            <br />
            <TextField
              placeholder="イベントを入力する"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                color: colorCodes.text.default, // 入力文字の色
                input: { color: colorCodes.text.default }, // 入力フィールドのテキスト色
                '& .MuiInputLabel-root': { color: colorCodes.text.default }, // ラベルの色
                '& .MuiInputLabel-root.Mui-focused': {
                  color: colorCodes.text.default,
                }, // フォーカス時のラベル色
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gray' }, // 通常時の枠線
                  '&:hover fieldset': { borderColor: 'green' }, // ホバー時の枠線
                  '&.Mui-focused fieldset': { borderColor: 'red' }, // フォーカス時の枠線
                },
              }}
            ></TextField>
            <br />
            <EventButton />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Day;
