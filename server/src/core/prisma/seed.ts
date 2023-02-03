import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  const roles = await prisma.role.createMany({
    data: [{ name: 'admin' }, { name: 'student' }, { name: 'teacher' }],
  });
  const user = await prisma.user.create({
    data: {
      name: 'admin',
      lastName: 'admin',
      email: 'admin@localhost.com',
      password: await bcrypt.hash('12345678', 10),
      roles: {
        connect: [{ name: 'admin' }],
      },
    },
  });
  console.log({ roles, user });
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
