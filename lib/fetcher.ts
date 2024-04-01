import { sql } from "@vercel/postgres";
import { User } from "@prisma/client";

export async function fetchUserByEmail(email: string) {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
