import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const user = await prisma.user.create({
    data: {
      name: "Housse",
      email: "houssemghabarou@gmail.com",
      age: 20,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },

    //either a select or include u can usee
    // -----------
    // include: {
    //   userPreference: true,
    // },
    select: {
      name: true,
      userPreference: { select: { id: true } },
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
