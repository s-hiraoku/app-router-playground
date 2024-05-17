import { createMenuItem } from "@/db/menuItems";

export const registerDefaultMenuForNewUser = async (userId: string) => {
  const defaultMenuItems = [
    {
      ownerId: userId,
      name: "Dashboard",
      iconName: "DashboardIcon",
      pathName: "./dashboard",
    },
    {
      ownerId: userId,
      name: "Settings",
      iconName: "GearIcon",
      pathName: "./settings",
    },
    {
      ownerId: userId,
      name: "Profile",
      iconName: "PersonIcon",
      pathName: "./profile",
    },
    {
      ownerId: userId,
      name: "Log out",
      iconName: "ExitIcon",
      pathName: "./logout",
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
