import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

const users = [
  {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@localhost.com',
    password: '12345678',
    roles: [{ name: 'admin' }],
  },
];

export const usersSeed = async () => {
  await prisma.user.deleteMany();
  for (const user of users) {
    const { roles, password, ...others } = user;
    const password_ = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        ...others,
        password: password_,
        roles: {
          connect: roles.map((role) => ({ name: role.name })),
        },
      },
    });
    console.log('Users created: ', users.length);
  }
  for (let i = 0; i < 100; i++) {
    const password_ = await bcrypt.hash('12345678', 10);
    await prisma.user.create({
      data: {
        name: 'student' + i,
        lastName: 'student' + i,
        email: 'student' + i + '@localhost.com',
        password: password_,
        roles: {
          connect: [{ name: 'student' }],
        },
      },
    });
  }
  prisma.$disconnect();
};
