import { supabase } from ".";

export type LoginPayload = {
  email: string;
  password: string;
};

const AUTH = supabase.auth;

export async function login({ email, password }: LoginPayload) {
  const { data, error } = await AUTH.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function logout() {
  const { error } = await AUTH.signOut();
  if (error) {
    console.log(error);
    return;
  }
}

export async function isAuthorized(): Promise<boolean> {
  const { data, error } = await AUTH.getSession();
  if (error) {
    console.log(error);
  }
  return data.session != null;
}
