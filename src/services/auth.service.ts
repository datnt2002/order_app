import { password } from "bun";
import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { TokenType } from "../interfaces/jwt.interface";
import {
  findAccountByEmail,
  findUserByAccountId,
} from "../repositories/auth.repo";
import configs from "../configs";

const generateAccessToken = async (payload: JWTPayload): Promise<string> => {
  const token = await sign(
    { ...payload, type: TokenType.ACCESS },
    configs.jwt.secret
  );

  return token;
};

const generateRefreshToken = async (payload: JWTPayload): Promise<string> => {
  const token = await sign(
    { ...payload, type: TokenType.REFRESH },
    configs.jwt.secret
  );

  return token;
};

const generateToken = async (userId: string) => {
  const payload: JWTPayload = {
    userId,
    sub: userId,
  };
  const accessToken = await generateAccessToken(payload);
  const refreshToken = await generateRefreshToken(payload);
  return {
    accessToken,
    refreshToken,
  };
};

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
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const tokens = await generateToken(user.id);
  return { user, tokens };
};

export { loginService };
