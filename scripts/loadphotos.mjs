
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] });

async function main() {
  const photos = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json().results;
  
  const res = await prisma.photo.createMany({
    data: photos,
    skipDuplicates: true
  });
  
  console.info(res);
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