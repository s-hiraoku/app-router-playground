import prisma from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error(`Error fetching user by email: ${email}`, error);
    throw error;
  }
};

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const user = await prisma.user.create({ data });
    return user;
  } catch (error) {
    console.error(`Error creating user: ${data.email}`, error);
    throw error;
  }
};

export const getMenuItemsByUserId = async (userId: string) => {
  try {
    const menuItems = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        menuItemRelations: {
          select: {
            menuItem: true,
          },
        },
      },
    });
    return menuItems;
  } catch (error) {
    console.error(`Error fetching menu items by user id: ${userId}`, error);
    throw error;
  }
};
