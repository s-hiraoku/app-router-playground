import prisma from "@/lib/prisma";
import { getMenuItems } from "./menuItems";
import { MenuItem } from "@prisma/client";

export const createUserMenuItemRelationsByUserId = async (userId: string) => {
  try {
    const menuItems = await getMenuItems();
    const userMenuItemRelations = menuItems.map((menuItem) => {
      return {
        userId,
        menuItemId: menuItem.id,
      };
    });
    await prisma.userMenuItemRelation.createMany({
      data: userMenuItemRelations,
    });
  } catch (error) {
    console.error("Failed to register user menu item relations:", error);
  }
};

export const createUserMenuItemRelations = async (data: {
  userId: string;
  menuItemId: string;
}) => {
  try {
    const userMenuItemRelation = await prisma.userMenuItemRelation.create({
      data,
    });
    return userMenuItemRelation;
  } catch (error) {
    console.error("Failed to create user menu item relation:", error);
  }
};

export type MenuItemWithCategory = MenuItem & {
  category: {
    name: string;
  };
};

export const getMenuItemsByUserId = async (userId: string) => {
  try {
    const userMenuItemRelations = await prisma.userMenuItemRelation.findMany({
      where: {
        userId,
      },
      include: {
        menuItem: {
          include: {
            category: true,
          },
        },
      },
    });
    return userMenuItemRelations.map((relation) => relation.menuItem);
  } catch (error) {
    console.error("Failed to get menu items by user id:", error);
    return [];
  }
};
