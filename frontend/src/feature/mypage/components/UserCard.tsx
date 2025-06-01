import React from 'react';
import { FormValues } from '../formValue/FormValues';
import { Box, MenuItem, Stack, Typography } from '@mui/material';
import colorCodes from '../../../config/colors';
import {
  AlternateEmailOutlined,
  ApartmentOutlined,
  CallEndOutlined,
  HomeOutlined,
  MarkEmailUnreadOutlined,
  PersonOutlineOutlined,
} from '@mui/icons-material';
import KebabButton from '../../../components/button/KebabButton';

interface Props {
  user: FormValues;
  handleSelectedEditAction: () => void;
  handleSelectedDeleteAction: () => void;
}

const styles = {
  card: {
    width: '500px',
    borderRadius: 2,
    m: 1,
    p: 2,
    backgroundColor: colorCodes.background.card,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box: {
    marginTop: 1,
    display: 'flex',
    width: '100%',
  },
  icon: {
    height: '20px',
    paddingTop: '3px',
  },
  title: {
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    color: colorCodes.text.default,
    textAlign: 'left',
    p: '0, 5px',
    width: '30%',
  },
  row: {
    borderRadius: 1,
    backgroundColor: colorCodes.background.default,
    width: '70%',
  },
};

const UserCard: React.FC<Props> = ({
  user,
  handleSelectedEditAction,
  handleSelectedDeleteAction,
}) => {
  return (
    <Box sx={styles.card}>
      <Stack direction="column">
        <Box sx={styles.header}>
          <Typography>ユーザー情報</Typography>
          <KebabButton>
            <MenuItem onClick={handleSelectedEditAction}>編集</MenuItem>
            <MenuItem onClick={handleSelectedDeleteAction}>削除</MenuItem>
          </KebabButton>
        </Box>
        <Box sx={styles.box}>
          <PersonOutlineOutlined sx={styles.icon} />
          <Typography sx={styles.title}>ユーザー名</Typography>
          <Typography sx={styles.row}>{user.name}</Typography>
        </Box>
        <Box sx={styles.box}>
          <MarkEmailUnreadOutlined sx={styles.icon} />
          <Typography sx={styles.title}>メールアドレス</Typography>
          <Typography sx={styles.row}>{user.email}</Typography>
        </Box>
        <Box sx={styles.box}>
          <CallEndOutlined sx={styles.icon} />
          <Typography sx={styles.title}>電話番号</Typography>
          <Typography sx={styles.row}>{user.phoneNumber}</Typography>
        </Box>
        <Box sx={styles.box}>
          <ApartmentOutlined sx={styles.icon} />
          <Typography sx={styles.title}>会社名</Typography>
          <Typography sx={styles.row}>{user.company}</Typography>
        </Box>
        <Box sx={styles.box}>
          <AlternateEmailOutlined sx={styles.icon} />
          <Typography sx={styles.title}>郵便番号</Typography>
          <Typography sx={styles.row}>{user.postalCode}</Typography>
        </Box>
        <Box sx={styles.box}>
          <HomeOutlined sx={styles.icon} />
          <Typography sx={styles.title}>住所</Typography>
          <Typography sx={styles.row}>{user.address}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserCard;
