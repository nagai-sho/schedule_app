import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const users = [
    {
      name: 'alice',
      email: 'sample@prisma.io',
      phoneNumber: '09012345678',
      hashedPassword:
        '$2b$12$tg885CjGIz1qs1nN2KFmlu6XdEPc.ucVzx4dwe9thxqL/rpaqWY9C',
      company: 'sample株式会社',
      postalCode: '1234567',
      address: 'sample県sample市',
    },
    {
      name: 'bob',
      email: 'bob@prisma.io',
      phoneNumber: '08098765432',
      hashedPassword:
        '$2b$12$5W9M.vVoU6BGHzjHh6XKTpoUm5Wpa.4WR7Kz3u6ybyDY7LPrkj.Q0',
      company: 'bob株式会社',
      postalCode: '2345678',
      address: 'bob県bob市',
    },
    {
      name: 'charlie',
      email: 'charlie@prisma.io',
      phoneNumber: '07012349876',
      hashedPassword:
        '$2b$12$9N7yIUzRc9jUGwPMpQI5bOzwFrAOlmga/Ncdlmz9vGe/qXZdMN0Am',
      company: 'charlie株式会社',
      postalCode: '3456789',
      address: 'charlie県charlie市',
    },
  ];
  await Promise.all(
    users.map((user) =>
      // upsert = update & insert
      prisma.user.upsert({
        // emailに一致するレコードがあるかチェック
        where: { email: user.email },
        // emailが一致するユーザーが居る場合、{}内のfiledを更新
        update: {},
        create: user,
      }),
    ),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
