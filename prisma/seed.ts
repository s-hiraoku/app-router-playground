import { PrismaErrorCodes } from "../types/dbDefinitions";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteAllData(modelName: string) {
  try {
    // @ts-ignore: Ignore type checking for dynamic model access
    await prisma[modelName].deleteMany();
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === PrismaErrorCodes.REQUIRED_ARGUMENT_FOR_QUERY_ENGINE_MISSING
    ) {
      console.warn(`Table for model ${modelName} does not exist. Skipping...`);
    } else {
      throw e;
    }
  }
}

async function main() {
  // delete all data with error handling for missing tables
  const models = ["userMenuItemRelation", "menuItem", "category", "user"];

  for (const model of models) {
    await deleteAllData(model);
  }

  // create a user
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
      password: "$2a$10$kPai9WiWEj7YgcukzVD5LewIcUmUOG8zy1QmO/bER4FA1xWMleYEC",
    },
  });

  // create categories
  const contentsCategory = await prisma.category.create({
    data: { name: "Contents" },
  });

  const userCategory = await prisma.category.create({
    data: { name: "User" },
  });

  // Add default menu items
  await prisma.menuItem.createMany({
    data: [
      {
        categoryId: contentsCategory.id,
        name: "Dashboard",
        iconName: "DashboardIcon",
        pathName: "./dashboard",
      },
      {
        categoryId: contentsCategory.id,
        name: "Settings",
        iconName: "GearIcon",
        pathName: "./settings",
      },
      {
        categoryId: userCategory.id,
        name: "Profile",
        iconName: "PersonIcon",
        pathName: "./profile",
      },
      {
        categoryId: userCategory.id,
        name: "Log out",
        iconName: "ExitIcon",
        pathName: "./logout",
      },
    ],
  });

  // Create user-menu-item relations
  const createdMenuItems = await prisma.menuItem.findMany();
  for (const menuItem of createdMenuItems) {
    await prisma.userMenuItemRelation.create({
      data: {
        userId: user.id,
        menuItemId: menuItem.id,
      },
    });
  }
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
