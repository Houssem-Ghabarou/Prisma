import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //for unique fields
  // const user = await prisma.user.findUnique({
  //   where: {
  //     // email: "houssemghabarou@gmail.com",
  //     age_name: {
  //       age: 20,
  //       name: "Houssem",
  //     },
  //   },
  //   // select: {
  //   //   email: true,
  //   // },
  // });

  //for normal fields
  const user = await prisma.user.findMany({
    // we can use findFirst also
    where: {
      name: "houssem",
    },
    // distinct: ["name"],
    take: 2, //pagination
    skip: 1, //skip one record
    orderBy: {
      age: "desc",
    },
    // select: {
    //   email: true,
    // },
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
