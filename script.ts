import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const usersUser = await prisma.user.findMany({
    where: {
      // userPreference: {
      //   emailUpdates: true,
      // },
      writtenPosts: {
        // every: {
        //   title: "Test",
        // },
        // none: {
        //   title: "Test",
        // },
        some: {
          title: { equals: "test" },
        },
      },
    },
  });
  const usersPost = await prisma.post.findMany({
    where: {
      author: {
        is: {
          //isNot available also
          age: 22,
        },
      },
    },
  });
  console.log(usersUser, usersPost);
}

main()
  .catch(async (e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
