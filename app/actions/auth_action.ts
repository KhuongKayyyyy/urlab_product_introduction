"use server";

import { signIn,signOut } from "@/auth";

export async function loginWithGithub() {
  return await signIn("github", { callbackUrl: "http://localhost:3000" });
}
export async function logoutUser() {
    return await signOut();
  }