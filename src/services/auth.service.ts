import { password } from "bun";
import {
  findAccountByEmail,
  findUserByAccountId,
} from "../repositories/auth.repo";

const generateAccessToken = () => {};

const generateRefreshToken = () => {};

const loginService = async (email: string, pass: string) => {
  const account = await findAccountByEmail(email);
  if (!account) {
    throw new Error("Invalid credentials");
  }

  const isPasswordMatch = await password.verify(pass, account.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid credentials");
  }

  const user = await findUserByAccountId(account.id);
  return user;
};
