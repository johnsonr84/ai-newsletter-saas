"use server";

import { auth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/actions/user";

/**
 * Gets the currently authenticated user from the database
 *
 * This helper combines two common steps:
 * 1. Get the Clerk user ID from the current session
 * 2. Fetch the corresponding user record from our database
 *
 * @throws Error if user is not authenticated or not found in database
 * @returns The user record from the database
 */
export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const user = await getUserByClerkId(userId);

  if (!user) {
    throw new Error("User not found in database");
  }

  return user;
}

/**
 * Checks if the current user has Pro plan access
 *
 * @returns Promise resolving to true if user has Pro plan, false otherwise
 */
export async function checkIsProUser(): Promise<boolean> {
  const { has } = await auth();

  if (!has) {
    return false;
  }

  return await has({ plan: "pro" });
}
