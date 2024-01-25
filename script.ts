import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.delete({
  //     where: {
  //       email: "houssemghabarou@gmail.com",
  //     },
  //   });
  //   console.log(user);
  // }

  const user = await prisma.user.deleteMany({
    where: {
      age: { gt: 20 },
    },
  });
  console.log(user);
}

main()
  .catch(async (e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
