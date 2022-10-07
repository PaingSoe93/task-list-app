import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.list.deleteMany();
  const list = await prisma.list.create({
    data: {
      name: 'Test',
    },
  });

  const task = await prisma.task.create({
    data: {
      title: 'Test',
      position: 1,
      status: 'UNASSIGNED',
      listId: list.id,
    },
  });

  console.log({ task });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
