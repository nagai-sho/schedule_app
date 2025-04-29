import { Box, Dialog } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import PrimaryButton from '../../../components/button/PrimaryButton';
import SecondaryButton from '../../../components/button/SecondaryButton';
import useCreateUser from '../hooks/useCreateUser';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { FormValues } from '../formValue/FormValues';
import InputUserForm from '../components/InputUserForm';

interface Props {
  title: string;
  isOpen: boolean;
  onCancel: () => void;
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

const CreateUserDialog: React.FC<Props> = ({ title, isOpen, onCancel }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      hashedPassword: '',
      company: '',
      postalCode: '',
      address: '',
    },
    mode: 'all',
  });

  const { control, handleSubmit, formState } = methods;
  const { isValid, isDirty } = formState;

  const { submitting, createUserRequest } = useCreateUser(
    () => {
      enqueueSnackbar('ユーザーを作成しました', {
        variant: 'success',
      });
    },
    () => {
      enqueueSnackbar('ユーザーの作成に失敗しました', {
        variant: 'error',
      });
    }
  );

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await createUserRequest(data);
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
      <Box sx={styles.title}>{title}</Box>

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

export default CreateUserDialog;
