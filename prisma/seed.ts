import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all data
  await prisma.category.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.user.deleteMany();

  // create a user
  await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: "",
      menus: {
        create: {
          name: "Home",
          iconName: "HomeIcon",
        },
      },
    },
  });
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
