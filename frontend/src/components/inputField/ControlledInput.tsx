import { Box, TextField, Typography } from '@mui/material';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import colorCodes from '../../config/colors';

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  rules?: RegisterOptions<T, Path<T>>;
  required?: boolean;
  multiline?: boolean;
  onChange?: (value: any) => void;
}

function ControlledInput<T extends FieldValues>({
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
      {required && (
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              top: '-14px',
              right: '0',
              transform: 'translateY(-50%)',
              color: colorCodes.text.required,
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '20px',
            }}
          >
            必須
          </Typography>
        </Box>
      )}
      <Controller
        name={name}
        control={control}
        rules={{ ...rules }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            placeholder={placeholder}
            required={required}
            multiline={multiline}
            error={!!error}
            helperText={error ? error.message : ''}
            fullWidth
            onChange={(e) => {
              field.onChange(e);
              if (onChange) {
                onChange(e);
              }
            }}
            onBlur={() => {
              if (!!field.value && typeof field.value === 'string') {
                const trimmedValue = field.value.trim();
                if (trimmedValue !== field.value) {
                  field.onChange(trimmedValue);
                }
              }
              field.onBlur();
            }}
            sx={{
              width: '100%',
              '& .MuiInputBase-root': {
                backgroundColor: colorCodes.input.default,
                borderRadius: '8px',
                '& fieldset': { border: 'none' },
                '&:hover fieldset': { border: 'none' },
                '&.Mui-focused fieldset': { border: 'none' },
              },
              '& .MuiInputBase-input': {
                padding: '10px 20px',
                fontSize: '14px',
                '&::placeholder': {
                  color: colorCodes.text.tertiary,
                  opacity: 1,
                },
                ...(multiline && {
                  width: '100%',
                  padding: '0',
                  paddingLeft: '6px',
                }),
              },
            }}
          />
        )}
      />
    </Box>
  );
}

export default ControlledInput;
