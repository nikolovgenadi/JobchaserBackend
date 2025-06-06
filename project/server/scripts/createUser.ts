import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: 'admina',
      email: 'admina@example.com',
      password: 'test1234',
    },
  });
  console.log('User created:', user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());