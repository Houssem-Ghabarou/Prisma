import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    // where: {
    //   // name: { equals: "houssem" },
    //   // name: { not: "houssem" },
    //   // name: { in: ["houssem", "Nour"] },
    //   // name: { notIn: ["houssem", "Nour"] },
    //   // age: { lt: 25 },
    //   // age: { gt: 20 },
    //   email: { contains: "@gmail.com" }, //endWith || startsWith
    // },
    where: {
      // AND: [
      //   { email: { startsWith: "hous" } },
      //   { email: { endsWith: "@gmail.com" } },
      // ],
      // OR: [{ email: { startsWith: "hous" } }, { age: { gt: 20 } }],
      NOT: { email: { startsWith: "hous" } },
    },
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
