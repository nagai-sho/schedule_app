import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

const Transport: React.FC = () => {
  const [truck, setTruck] = useState('');
  const handleChange = (e: SelectChangeEvent<string>) => {
    setTruck(e.target.value);
  };
  return (
    <>
      <Typography>搬入予定</Typography>
      <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>○○現場</AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              margin: '5px',
            }}
          >
            {truck}
          </Typography>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: '13px',
              }}
            >
              車両を選択
            </InputLabel>
            <Select value={truck} onChange={handleChange} label={'車両を選択'}>
              {/* <MenuItem>車両を追加する</MenuItem> */}
              <MenuItem value={'軽トラ'}>軽トラ</MenuItem>
              <MenuItem value={'2tトラック'}>2tトラック</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Button sx={{ marginBottom: '5px' }}>予定を追加する</Button>
    </>
  );
};

export default Transport;
