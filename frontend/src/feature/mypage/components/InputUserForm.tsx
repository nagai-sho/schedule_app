import React from 'react';
import { Control } from 'react-hook-form';
import { FormValues } from '../formValue/FormValues';
import { Box, Stack, Typography } from '@mui/material';
import ControlledInputWithTitle from '../../../components/inputField/ControlledInputWithTitle';
import userValidationRules from '../validation/userValidationRules';
import ControlledPostalCode from '../../../components/inputField/ControlledPostalCode';
import colorCodes from '../../../config/colors';

interface Props {
  control: Control<FormValues>;
}

const styles = {
  input: {
    marginTop: 1,
  },
  postalCodeLabel: {
    color: colorCodes.text.secondary,
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    marginBottom: '4px',
  },
};

const InputUserForm: React.FC<Props> = ({ control }) => {
  return (
    <Box>
      <Stack>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="ユーザー名"
            name="name"
            control={control}
            placeholder="テキストを入力"
            rules={userValidationRules.name}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="メールアドレス"
            name="email"
            control={control}
            placeholder="メールアドレスを入力"
            rules={userValidationRules.email}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="電話番号"
            name="phoneNumber"
            control={control}
            placeholder="数字のみを入力"
            rules={userValidationRules.phoneNumber}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="パスワード"
            name="hashedPassword"
            control={control}
            placeholder="英数字を入力"
            rules={userValidationRules.password}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="会社名"
            name="company"
            control={control}
            placeholder="テキストを入力"
            rules={userValidationRules.company}
          />
        </Box>
        <Box sx={styles.input}>
          <Typography sx={styles.postalCodeLabel}>郵便番号</Typography>
          <ControlledPostalCode
            name="postalCode"
            control={control}
            placeholder="数字のみを入力"
            rules={userValidationRules.postalCode}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="会社住所"
            name="address"
            control={control}
            placeholder="テキストを入力"
            rules={userValidationRules.address}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default InputUserForm;
