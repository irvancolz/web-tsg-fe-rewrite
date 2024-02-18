import { redirect } from "next/navigation";
import { supabase } from ".";

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginPayload) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    return;
  }
}
