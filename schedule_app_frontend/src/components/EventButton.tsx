import Button from '@mui/material/Button';
import colorCodes from '../styles/colors';

const EventButton: React.FC = () => {
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          console.log('save!');
        }}
        sx={{ color: colorCodes.text.default }}
      >
        保存/編集
      </Button>
    </>
  );
};

export default EventButton;
