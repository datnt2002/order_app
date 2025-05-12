import { password } from "bun";
import { findAccountByEmail, findUserById } from "../repositories/auth.repo";

const loginService = async (email: string, pass: string) => {
  const account = await findAccountByEmail(email);
  if (!account) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await password.verify(pass, account.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const user = await findUserById(account.userId);
  return user;
};
