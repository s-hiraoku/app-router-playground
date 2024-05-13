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

export const createMenuItem = async (data: {
  ownerId: string;
  title: string;
  url: string;
  name: string;
  iconName: string;
  pathName: string;
}) => {
  try {
    const menuItem = await prisma.menuItem.create({ data });
    return menuItem;
  } catch (error) {
    console.error(`Error creating menu item: ${data}`, error);
    throw error;
  }
};
