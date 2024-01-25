import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Houssem",
        email: "houssemghabarou@gmail.com",
        age: 20,
      },
      {
        name: "Nour",
        email: "nour@gmail.com",
        age: 20,
      },
    ],
  });
  console.log(users);
}

main()
  .catch(async (e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
