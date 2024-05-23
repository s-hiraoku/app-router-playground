import prisma from "@/lib/prisma";

export const getMenuItems = async () => {
  try {
    const menuItems = await prisma.menuItem.findMany();
    return menuItems;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};
