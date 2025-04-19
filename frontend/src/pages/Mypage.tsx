import { ListItem, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const Mypage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>('http://localhost:3000/users')
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('ユーザー取得失敗:', err));
  }, []);

  console.log('users: ', users);

  return (
    <Box>
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
    </Box>
  );
};

export default Mypage;
