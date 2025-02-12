import Button from '@mui/material/Button';

const EventButton: React.FC = () => {
  return (
    <>
      <Button
        type="submit"
        onClick={() => {
          console.log('save!');
        }}
      >
        保存/編集
      </Button>
    </>
  );
};

export default EventButton;
