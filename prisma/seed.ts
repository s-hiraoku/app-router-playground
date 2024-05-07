import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // delete all data
  await prisma.category.deleteMany();
  await prisma.menuItem.deleteMany();
  await prisma.user.deleteMany();

  // create a user
  await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: "$2a$10$kPai9WiWEj7YgcukzVD5LewIcUmUOG8zy1QmO/bER4FA1xWMleYEC",
      menuItems: {
        create: {
          name: "Home",
          iconName: "HomeIcon",
          pathName: "./Home",
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
