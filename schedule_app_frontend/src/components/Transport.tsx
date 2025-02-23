import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

const Transport: React.FC = () => {
  const [truck, setTruck] = useState('');
  const handleChange = (event: SelectChangeEvent<string>) => {
    setTruck(event.target.value);
  };
  return (
    <>
      <Typography>搬入予定</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>○○現場</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{truck}</Typography>
          <FormControl fullWidth>
            <InputLabel>車両を選択</InputLabel>
            <Select value={truck} onChange={handleChange} label={'車両を選択'}>
              {/* <MenuItem>車両を追加する</MenuItem> */}
              <MenuItem value={'軽トラ'}>軽トラ</MenuItem>
              <MenuItem value={'2tトラック'}>2tトラック</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Typography>予定を追加する</Typography>
    </>
  );
};

export default Transport;
