import Factory from './Factory';
import Construction from './Construction';
import Transport from './Transport';
import EventButton from './EventButton';
import { TextField } from '@mui/material';
import '../styles/day.css';

interface DayProps {
  date: Date;
}

const Day: React.FC<DayProps> = ({ date }) => {
  return (
    <>
      <div className="day">
        <div className="one_day">
          <div>{date.getDate()}</div>
          <div>{date.toLocaleDateString('ja-JP', { weekday: 'short' })}</div>
        </div>
        <div className="one_day">
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
                color: 'white', // 入力文字の色
                input: { color: 'white' }, // 入力フィールドのテキスト色
                '& .MuiInputLabel-root': { color: 'white' }, // ラベルの色
                '& .MuiInputLabel-root.Mui-focused': { color: 'white' }, // フォーカス時のラベル色
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
        </div>
      </div>
    </>
  );
};

export default Day;
