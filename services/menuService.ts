import { createMenuItem } from "@/db/menuItems";

export const registerDefaultMenuForNewUser = async (userId: string) => {
  const defaultMenuItems = [
    {
      ownerId: userId,
      name: "Home",
      iconName: "HomeIcon",
      pathName: "./Home",
    },
  ];

  try {
    for (const item of defaultMenuItems) {
      await createMenuItem(item);
    }
    console.log("Default menu items registered for new user.");
  } catch (error) {
    console.error("Failed to register default menu items:", error);
  }
};
