import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getCategoryById = async (id: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category;
  } catch (error) {
    console.error(`Error fetching category by id: ${id}`, error);
    throw error;
  }
};

export const getCategoryByName = async (name: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: { name },
    });
    return category;
  } catch (error) {
    console.error(`Error fetching category by name: ${name}`, error);
    throw error;
  }
};

export const createCategory = async (data: Prisma.CategoryCreateInput) => {
  try {
    const category = await prisma.category.create({ data });
    return category;
  } catch (error) {
    console.error(`Error creating category: ${data}`, error);
    throw error;
  }
};
