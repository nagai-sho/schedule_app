import { Box, Dialog } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import PrimaryButton from '../../../components/button/PrimaryButton';
import SecondaryButton from '../../../components/button/SecondaryButton';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { FormValues } from '../formValue/FormValues';
import InputUserForm from '../components/InputUserForm';
import useUpdateUser from '../hooks/useUpdateUser';
import axios from 'axios';

interface Props {
  userId: number;
  user: FormValues;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

const styles = {
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const UpdateUserDialog: React.FC<Props> = ({
  userId,
  user,
  isOpen,
  onCancel,
  onSubmit,
}) => {
  console.log('userId', userId);
  const methods = useForm<FormValues>({
    mode: 'all',
  });

  const { control, handleSubmit, formState, reset } = methods;
  const { isValid, isDirty } = formState;

  useEffect(() => {
    reset({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      hashedPassword: user.hashedPassword,
      company: user.company,
      postalCode: user.postalCode,
      address: user.address,
    });
  }, [user, reset]);

  const { submitting, updateUserRequest } = useUpdateUser(
    userId,
    () => {
      enqueueSnackbar('ユーザー情報の編集に成功しました', {
        variant: 'success',
      });
      onSubmit();
    },
    (error: unknown) => {
      if (axios.isAxiosError(error) && error.status === 409) {
        enqueueSnackbar('そのメールアドレスは既に登録されています', {
          variant: 'error',
        });
      } else {
        enqueueSnackbar('ユーザーの作成に失敗しました', {
          variant: 'error',
        });
      }
    }
  );

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await updateUserRequest(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      slotProps={{
        paper: {
          sx: { borderRadius: 2, minWidth: '300px', p: 2 },
        },
      }}
    >
      <Box sx={styles.title}>ユーザー情報の編集</Box>

      <InputUserForm control={control} />

      <Box sx={styles.button}>
        <Stack direction="row" spacing={2}>
          <SecondaryButton title={'キャンセル'} onClick={onCancel} />
          <PrimaryButton
            title={'保存'}
            onClick={handleSubmit((data) => {
              handleFormSubmit(data);
            })}
            disabled={submitting || !isValid || !isDirty}
          />
        </Stack>
      </Box>
    </Dialog>
  );
};

export default UpdateUserDialog;
