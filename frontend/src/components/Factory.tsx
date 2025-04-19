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
import { useState } from 'react';

const Factory: React.FC = () => {
  const [worker, setWorker] = useState('');
  const handleChange = (e: SelectChangeEvent<string>) => {
    setWorker(e.target.value);
  };

  return (
    <>
      <Typography>工場予定</Typography>
      <Accordion sx={{ backgroundColor: 'transparent', marginBottom: '10px' }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          人員一覧
        </AccordionSummary>
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
            <Select value={worker} onChange={handleChange} label="人員を追加">
              <MenuItem value={'松井'}>松井</MenuItem>
              <MenuItem value={'斎藤'}>斎藤</MenuItem>
              <MenuItem value={'山本'}>山本</MenuItem>
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Factory;
