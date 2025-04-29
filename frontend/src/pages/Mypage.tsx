import { ListItem, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useDialog from '../hooks/useDialog';
import CreateUserDialog from '../feature/mypage/dialog/CreateUserDialog';
import PrimaryButton from '../components/button/PrimaryButton';

type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  hashedPassword: string;
  company: string;
  postalCode: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

type GetUsersResponse = {
  users: User[];
};

const Mypage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<GetUsersResponse>('http://localhost:3000/users')
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error('ユーザー取得失敗:', err));
  }, []);

  console.log('users: ', users);

  const {
    isOpen: isCreateDialogOpen,
    showDialog: showCreateDialog,
    closeDialog: closeCreateDialog,
  } = useDialog();

  return (
    <Box>
      <Box>
        <PrimaryButton onClick={showCreateDialog} title={'新規作成'} />
      </Box>
      users画面
      <Stack>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Stack direction="column">
              <Typography>{user.name}</Typography>
              <Typography>{user.email}</Typography>
              <Typography>{user.phoneNumber}</Typography>
              <Typography>{user.company}</Typography>
              <Typography>{user.postalCode}</Typography>
              <Typography>{user.address}</Typography>
            </Stack>
          </ListItem>
        ))}
      </Stack>
      <CreateUserDialog
        title="新規ユーザー作成"
        isOpen={isCreateDialogOpen}
        onCancel={closeCreateDialog}
        // onSubmit={handleCreateUser}
      />
    </Box>
  );
};

export default Mypage;
