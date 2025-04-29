import React from 'react';
import { Control } from 'react-hook-form';
import { FormValues } from '../formValue/FormValues';
import { Box, Stack } from '@mui/material';
import ControlledInputWithTitle from '../../../components/inputField/ControlledInputWithTitle';

interface Props {
  control: Control<FormValues>;
}

const styles = {
  input: {
    marginTop: 1,
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
            // rules={userValidationRules.name}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="メールアドレス"
            name="email"
            control={control}
            placeholder="メールアドレスを入力"
            // rules={userValidationRules.email}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="電話番号"
            name="phoneNumber"
            control={control}
            placeholder="数字のみを入力"
            // rules={userValidationRules.phoneNumber}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="パスワード"
            name="hashedPassword"
            control={control}
            placeholder="英数字を入力"
            // rules={userValidationRules.password}
            required={true}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="会社名"
            name="company"
            control={control}
            placeholder="テキストを入力"
            // rules={userValidationRules.company}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="郵便番号"
            name="postalCode"
            control={control}
            placeholder="数字のみを入力"
            // rules={userValidationRules.postalCode}
          />
        </Box>
        <Box sx={styles.input}>
          <ControlledInputWithTitle
            title="会社住所"
            name="address"
            control={control}
            placeholder="テキストを入力"
            // rules={userValidationRules.address}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default InputUserForm;
