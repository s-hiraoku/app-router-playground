import { createMenuItem } from "@/db/menuItems";
import { createCategory } from "@/db/categories";
import { Prisma } from "@prisma/client";

type CategoryType = "Contents" | "User";

const DEFAULT_CATEGORIES: Record<"name", CategoryType>[] = [
  { name: "Contents" },
  { name: "User" },
];

const getDefaultMenuItems = (userId: string): Prisma.MenuItemCreateInput[] => [
  {
    category: { connect: { name: "Contents" } },
    name: "Dashboard",
    iconName: "DashboardIcon",
    pathName: "./dashboard",
    owner: { connect: { id: userId } },
  },
  {
    category: { connect: { name: "Contents" } },
    name: "Settings",
    iconName: "GearIcon",
    pathName: "./settings",
    owner: { connect: { id: userId } },
  },
  {
    category: { connect: { name: "User" } },
    name: "Profile",
    iconName: "PersonIcon",
    pathName: "./profile",
    owner: { connect: { id: userId } },
  },
  {
    category: { connect: { name: "User" } },
    name: "Log out",
    iconName: "ExitIcon",
    pathName: "./logout",
    owner: { connect: { id: userId } },
  },
];

const registerDefaultCategories = async () => {
  try {
    for (const category of DEFAULT_CATEGORIES) {
      await createCategory(category);
    }
    console.log("Default categories registered.");
  } catch (error) {
    console.error("Failed to register default categories:", error);
    throw error;
  }
};

const registerDefaultMenuItems = async (
  defaultMenuItems: Prisma.MenuItemCreateInput[]
) => {
  try {
    for (const item of defaultMenuItems) {
      await createMenuItem(item);
    }
    console.log("Default menu items registered for new user.");
  } catch (error) {
    console.error("Failed to register default menu items:", error);
    throw error;
  }
};

export const registerSidebarItems = async (userId: string) => {
  try {
    await registerDefaultCategories();
    const defaultMenuItems = getDefaultMenuItems(userId);
    await registerDefaultMenuItems(defaultMenuItems);
  } catch (error) {
    console.error("Failed to register sidebar items:", error);
  }
};
