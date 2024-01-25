import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.update({
  //   // also updateMany
  //   data: {
  //     age: {
  //       // increment: 1,
  //       // decrement: 5,
  //       // multiply: 6,
  //       divide: 6,
  //     },
  //   },
  //   where: {
  //     email: "houssemghabarou@gmail.com",
  //   },
  //   // select: {
  //   //   name: true,
  //   // },
  // });
  const user = await prisma.user.update({
    where: {
      email: "houssemghabarou@gmail.com ",
    },
    data: {
      userPreference: {
        connect: {
          //u can disconnect also with ####disconnect
          ///this will connect the user created to a preference that is already created before
          id: "createdId for exampl 5454845655687884",
        },
      },
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
