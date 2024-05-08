import prisma from "@/lib/prisma";

export const getMenuItemsByUserId = async (userId: string) => {
  try {
    const menuItems = await prisma.menuItem.findMany({
      where: { ownerId: userId },
    });
    return menuItems;
  } catch (error) {
    console.error(`Error fetching menu items by user id: ${userId}`, error);
    throw error;
  }
};
