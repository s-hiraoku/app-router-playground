import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { User } from "@prisma/client";

export async function fetchUser(email: string) {
  try {
    const user = await sql<User>`SELECT * FROM user WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
