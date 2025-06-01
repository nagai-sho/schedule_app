import { Box, Dialog, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import PrimaryButton from '../../../components/button/PrimaryButton';
import SecondaryButton from '../../../components/button/SecondaryButton';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { FormValues } from '../formValue/FormValues';
import colorCodes from '../../../config/colors';
import useDeleteUser from '../hooks/useDeleteUser';

interface Props {
  userId: number;
  user: FormValues;
  isOpen: boolean;
  onCancel: () => void;
  onDeleted: () => void;
}

const styles = {
  titleBox: {
    display: 'flex',
  },
  title: {
    fontSize: '20px',
  },
  userName: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: colorCodes.text.required,
  },
  button: {
    marginTop: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const DeleteUserDialog: React.FC<Props> = ({
  userId,
  user,
  isOpen,
  onCancel,
  onDeleted,
}) => {
  console.log('userId', userId);
  const methods = useForm<FormValues>({
    mode: 'all',
  });

  const { handleSubmit } = methods;

  const { deleteUserRequest } = useDeleteUser(
    userId,
    () => {
      enqueueSnackbar('ユーザー情報を削除しました', {
        variant: 'success',
      });
      onDeleted();
    },
    () => {
      enqueueSnackbar('ユーザー情報の削除に失敗しました', {
        variant: 'error',
      });
    }
  );

  const handleFormSubmit = async () => {
    try {
      await deleteUserRequest();
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
      <Box sx={styles.titleBox}>
        <Typography sx={styles.userName}>{user.name}</Typography>
        <Typography sx={styles.title}>を削除しますか？</Typography>
      </Box>

      <Box sx={styles.button}>
        <Stack direction="row" spacing={2}>
          <SecondaryButton title={'キャンセル'} onClick={onCancel} />
          <PrimaryButton
            title={'削除'}
            onClick={handleSubmit(() => {
              handleFormSubmit();
            })}
          />
        </Stack>
      </Box>
    </Dialog>
  );
};

export default DeleteUserDialog;
