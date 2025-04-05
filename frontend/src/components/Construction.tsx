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
import { useState } from 'react';

const Construction: React.FC = () => {
  const [worker, setWorker] = useState('');
  const handleChange = (e: SelectChangeEvent<string>) => {
    setWorker(e.target.value);
  };
  return (
    <>
      <Typography>工事予定</Typography>
      <Accordion sx={{ backgroundColor: 'transparent' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>○○現場</AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              margin: '5px',
            }}
          >
            {worker}
          </Typography>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontSize: '13px',
              }}
            >
              人員を追加
            </InputLabel>
            <Select value={worker} onChange={handleChange} label={'人員を追加'}>
              <MenuItem value="山田">山田</MenuItem>
              <MenuItem value="佐藤">佐藤</MenuItem>
              <MenuItem value="田中">田中</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Button sx={{ marginBottom: '5px' }}>予定を追加する</Button>
    </>
  );
};

export default Construction;
