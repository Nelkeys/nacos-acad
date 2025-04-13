// src/utils/auth.js
import supabase from "./supabase"; // Import the Supabase client

/**
 * Initiate sign in via Google OAuth.
 */
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error("Google sign-in error:", error);
  }
  return { data, error };
};

/**
 * Sign out the current user.
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Sign out error:", error);
  }
  return { error };
};
