import { createUserMenuItemRelationsByUserId } from "@/db/userMenuItemRelations";

const registerUserMenuItemRelations = async (userId: string) => {
  try {
    await createUserMenuItemRelationsByUserId(userId);
  } catch (error) {
    console.error("Failed to register user menu item relations:", error);
  }
};

export const registerSidebarItems = async (userId: string) => {
  try {
    await registerUserMenuItemRelations(userId);
  } catch (error) {
    console.error("Failed to register sidebar items:", error);
  }
};
