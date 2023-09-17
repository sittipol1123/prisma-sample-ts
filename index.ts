import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //     data: {
  //         name: 'sittipol',
  //         email: 'sittipol@gmail.com',
  //         posts: {
  //             create: {
  //                 title: 'stp',
  //                 content: 'th'
  //             }
  //         }
  //     }
  // })

  const data = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(data, { depth: null });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
