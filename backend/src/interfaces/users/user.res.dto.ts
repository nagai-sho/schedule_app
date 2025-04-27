import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: 'ユーザーID',
  })
  userId: number;

  @ApiProperty({
    description: 'ユーザー名',
  })
  name: string;

  @ApiProperty({
    description: 'メールアドレス',
  })
  email: string;

  @ApiProperty({
    description: 'パスワード',
  })
  hashedPassword: string;

  @ApiProperty({
    description: '電話番号',
  })
  phoneNumber: string | null;

  @ApiProperty({
    description: '会社名',
  })
  company: string | null;

  @ApiProperty({
    description: '郵便番号',
  })
  postalCode: string | null;

  @ApiProperty({
    description: '会社住所',
  })
  address: string | null;

  constructor(data: User) {
    this.userId = data.userId;
    this.name = data.name;
    this.email = data.email;
    this.hashedPassword = data.hashedPassword;
    this.phoneNumber = data.phoneNumber ?? null;
    this.company = data.company ?? null;
    this.postalCode = data.postalCode ?? null;
    this.address = data.address ?? null;
  }
}

export class GetUsersResponse {
  @ApiProperty({
    description: 'ユーザーリスト',
    type: [User],
  })
  users: User[];

  constructor(users: User[]) {
    this.users = users.map((user) => new User(user));
  }
}

export class GetUserResponse {
  @ApiProperty({
    description: 'ユーザー',
  })
  user: User;

  constructor(user: User) {
    this.user = new User(user);
  }
}

export class PostUserResponse extends User {}
export class PutUserResponse extends User {}
