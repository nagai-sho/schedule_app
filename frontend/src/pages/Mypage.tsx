import { Box, Stack } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useDialog from '../hooks/useDialog';
import CreateUserDialog from '../feature/mypage/dialog/CreateUserDialog';
import PrimaryButton from '../components/button/PrimaryButton';
import UserCard from '../feature/mypage/components/UserCard';
import UpdateUserDialog from '../feature/mypage/dialog/UpdateUserDialog';
import DeleteUserDialog from '../feature/mypage/dialog/DeleteUserDialog';

type User = {
  userId: number;
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

const styles = {
  container: {
    maxWidth: '500px',
    mx: 'auto',
  },
  cord: {
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 1,
  },
};

const Mypage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log('test1, users: ', users);

  useEffect(() => {
    axios
      .get<GetUsersResponse>('http://localhost:3000/users')
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error('ユーザー取得失敗:', err));
  }, []);

  const refetchUsers = async () => {
    try {
      const res = await axios.get<GetUsersResponse>(
        'http://localhost:3000/users'
      );
      setUsers(res.data.users);
    } catch (err) {
      console.error('ユーザー取得失敗:', err);
    }
  };

  const {
    isOpen: isCreateDialogOpen,
    showDialog: showCreateDialog,
    closeDialog: closeCreateDialog,
  } = useDialog();

  const {
    isOpen: isEditDialogOpen,
    showDialog: showEditDialog,
    closeDialog: closeEditDialog,
  } = useDialog();

  const {
    isOpen: isDeleteDialogOpen,
    showDialog: showDeleteDialog,
    closeDialog: closeDeleteDialog,
  } = useDialog();

  const handleCreated = () => {
    closeCreateDialog();
    refetchUsers();
  };

  const handleEdited = () => {
    closeEditDialog();
    refetchUsers();
  };

  const handleDeleted = () => {
    closeDeleteDialog();
    refetchUsers();
  };

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSelectedEditAction = (id: number) => {
    console.log('編集用に呼び出された user.id:', id);
    const targetUser = users.find((user) => user.userId === id);
    console.log('targetUserId: ', targetUser?.userId);
    if (targetUser) {
      setSelectedUser(targetUser);
      showEditDialog();
    }
  };

  const handleSelectedDeleteAction = (id: number) => {
    console.log('削除用に呼び出された user.id:', id);
    const targetUser = users.find((user) => user.userId === id);
    console.log('targetUserId: ', targetUser?.userId);
    if (targetUser) {
      setSelectedUser(targetUser);
      showDeleteDialog();
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.button}>
        <PrimaryButton onClick={showCreateDialog} title={'新規作成'} />
      </Box>
      <Stack sx={styles.cord}>
        {users.map((user) => (
          <UserCard
            key={user.userId}
            user={user}
            handleSelectedEditAction={() =>
              handleSelectedEditAction(user.userId)
            }
            handleSelectedDeleteAction={() =>
              handleSelectedDeleteAction(user.userId)
            }
          />
        ))}
      </Stack>

      {isCreateDialogOpen && (
        <CreateUserDialog
          isOpen={isCreateDialogOpen}
          onCancel={closeCreateDialog}
          onSubmit={handleCreated}
        />
      )}

      {selectedUser && (
        <UpdateUserDialog
          userId={selectedUser.userId}
          user={selectedUser}
          isOpen={isEditDialogOpen}
          onCancel={closeEditDialog}
          onSubmit={handleEdited}
        />
      )}

      {selectedUser && (
        <DeleteUserDialog
          userId={selectedUser.userId}
          user={selectedUser}
          isOpen={isDeleteDialogOpen}
          onCancel={closeDeleteDialog}
          onDeleted={handleDeleted}
        />
      )}
    </Box>
  );
};

export default Mypage;
