import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { User } from "@prisma/client";

export async function fetchUser(email: string) {
  try {
    const user = await sql`SELECT * from USERS where email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
