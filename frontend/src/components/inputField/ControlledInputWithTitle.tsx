import { Box, Typography } from '@mui/material';
import { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import colorCodes from '../../config/colors';
import ControlledInput from './ControlledInput';

interface Props<T extends FieldValues> {
  title: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  rules?: RegisterOptions<T, Path<T>>;
  required?: boolean;
  multiline?: boolean;
  onChange?: (value: any) => void;
}

function ControlledInputWithTitle<T extends FieldValues>({
  title,
  name,
  control,
  placeholder,
  rules,
  required,
  multiline,
  onChange,
}: Props<T>) {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        color={colorCodes.text.secondary}
        fontSize="12px"
        fontWeight={400}
        lineHeight="20px"
        marginBottom="4px"
      >
        {title}
      </Typography>

      <ControlledInput
        name={name}
        control={control}
        placeholder={placeholder}
        rules={rules}
        required={required}
        multiline={multiline}
        onChange={(e: any) => {
          if (onChange) {
            onChange(e);
          }
        }}
      />
    </Box>
  );
}

export default ControlledInputWithTitle;
