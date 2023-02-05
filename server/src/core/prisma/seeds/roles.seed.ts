import { PrismaClient } from '@prisma/client';
import { roles } from './data/roles';
const prisma = new PrismaClient();

export const roleSeed = async () => {
  await prisma.role.deleteMany();
  const role = await prisma.role.createMany({
    data: roles,
  });
  console.log('Roles created: ', role.count);
  prisma.$disconnect();
};
