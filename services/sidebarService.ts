import { createUserMenuItemRelationsByUserId } from "@/db/userMenuItemRelations";

export const registerSidebarItems = async (userId: string) => {
  try {
    await createUserMenuItemRelationsByUserId(userId);
  } catch (error) {
    console.error("Failed to register sidebar items:", error);
  }
};
